import db from '../models/index.js';
const orders = db.models.orders;
const ordersItems = db.models.orders_items;
const printers = db.models.printers;

export const postOrders = async (req, res) => {
  const { table_id, items } = req.body;

  if (!table_id) {
    return res
      .status(400)
      .send({ message: 'Table id is required.', status: 400 });
  }

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).send({
      message: 'Items are required and should be an array.',
      status: 400,
    });
  }

  try {
    const totalOrders = await orders.count();
    const newOrder = await orders.create({
      order_name: `ORDER-${totalOrders + 1}`,
      table_id,
    });
    const itemOrders = items.map((item) => ({
      ...item,
      order_id: newOrder.order_id,
    }));

    await ordersItems.bulkCreate(itemOrders);

    const orderWithItems = {
      ...newOrder.toJSON(),
      items: itemOrders,
    };

    const allPrinters = await printers.findAll();

    const printersData = allPrinters.reduce((acc, printer) => {
      if (printer.printer_name.toUpperCase() === 'PRINTER KASIR') {
        acc[printer.printer_name] = {
          printer_id: printer.printer_id,
          printer_name: printer.printer_name,
          items: [],
        };
      }
      return acc;
    }, {});

    items.forEach((item) => {
      const {
        category_name,
        product_name,
        product_id,
        variant_id,
        variant_name,
      } = item;

      let printerNames = [];

      if (category_name.toLowerCase() === 'minuman') {
        printerNames.push('PRINTER BAR');
      } else if (category_name.toLowerCase() === 'promo') {
        printerNames.push('PRINTER BAR', 'PRINTER DAPUR');
      } else {
        printerNames.push('PRINTER DAPUR');
      }

      printerNames.forEach((printerName) => {
        if (!printersData[printerName]) {
          const printer = allPrinters.find(
            (p) => p.printer_name === printerName
          );
          if (printer) {
            printersData[printerName] = {
              printer_id: printer.printer_id,
              printer_name: printer.printer_name,
              items: [],
            };
          }
        }

        if (printersData[printerName]) {
          printersData[printerName].items.push({
            product_id,
            product_name,
            variant_id,
            variant_name,
          });
        }
      });

      printersData['PRINTER KASIR'].items.push({
        product_id,
        product_name,
        variant_id,
        variant_name,
      });
    });

    res.status(201).json({
      message: 'Order added successfully',
      data: {
        order: orderWithItems,
        printers: Object.values(printersData),
      },
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send({
      message: 'Some error occurred while creating the order.',
      error: error.message,
      status: 500,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const response = await orders.findAll({
      attributes: ['order_id', 'order_name'],
      include: [
        { model: db.models.tables, attributes: ['table_name', 'table_id'] },
      ],
      limit: 10,
      offset: 0,
    });

    const dataOrders = response.map((data) => ({
      ...data.toJSON(),
      items: [],
    }));

    for (const order of dataOrders) {
      const items = await ordersItems.findAll({
        where: { order_id: order.order_id },
        attributes: ['order_item_id', 'quantity'],
        include: [
          {
            model: db.models.product,
            attributes: ['product_name'],
          },
          {
            model: db.models.variants,
            attributes: ['variant_name', 'price'],
          },
        ],
        offset: 0,
        limit: 10,
      });
      order.items = items;
    }

    res.status(200).json({
      message: 'All Orders',
      data: dataOrders,
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).send({
      message: 'Some error occurred while fetching orders.',
      error: error.message,
      status: 500,
    });
  }
};

export const getOrderBill = async (req, res) => {
  const { table_id } = req.query;

  try {
    const response = await orders.findOne({
      where: { table_id },
      attributes: ['order_id', 'order_name'],
      include: [
        { model: db.models.tables, attributes: ['table_name', 'table_id'] },
      ],
    });

    if (!response) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const dataOrders = await ordersItems.findAll({
      where: { order_id: response.order_id },
      attributes: ['order_item_id', 'quantity'],
      include: [
        {
          model: db.models.product,
          attributes: ['product_name'],
        },
        {
          model: db.models.variants,
          attributes: ['variant_name', 'price'],
        },
      ],
      offset: 0,
      limit: 10,
    });

    const totalPrice = dataOrders
      .map((item) => item.quantity * item.variant.price)
      .reduce((acc, curr) => acc + curr, 0);

    const getOrders = {
      ...response.toJSON(),
      total_price: totalPrice,
      items: dataOrders,
    };

    res.status(200).json({
      message: 'Order bill fetched successfully',
      data: getOrders,
    });
  } catch (error) {
    console.error('Error fetching order bill:', error);
    res.status(500).send({
      message: 'An error occurred while fetching the order bill.',
      error: error.message,
    });
  }
};
