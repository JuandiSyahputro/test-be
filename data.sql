-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2024 at 12:49 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test-be`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `created_at`, `updated_at`) VALUES
(1, 'Promo', '2024-08-04 20:08:33', '2024-08-04 20:08:33'),
(2, 'Makanan', '2024-08-04 20:08:42', '2024-08-04 20:31:41'),
(3, 'Minuman', '2024-08-04 20:08:49', '2024-08-04 20:08:49');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_name` varchar(255) NOT NULL,
  `table_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_name`, `table_id`, `created_at`, `updated_at`) VALUES
(1, 'ORDER-1', 1, '2024-08-06 08:17:08', '2024-08-06 08:17:08'),
(2, 'ORDER-2', 1, '2024-08-06 09:58:59', '2024-08-06 09:58:59');

-- --------------------------------------------------------

--
-- Table structure for table `orders_items`
--

CREATE TABLE `orders_items` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `variant_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders_items`
--

INSERT INTO `orders_items` (`order_item_id`, `order_id`, `product_id`, `variant_id`, `quantity`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, 3, '2024-08-06 08:17:08', '2024-08-06 08:17:08'),
(2, 1, 3, 6, 1, 3, '2024-08-06 08:17:08', '2024-08-06 08:17:08'),
(3, 1, 1, 11, 2, 1, '2024-08-06 08:17:08', '2024-08-06 08:17:08'),
(4, 1, 2, 4, 1, 2, '2024-08-06 08:17:08', '2024-08-06 08:17:08'),
(5, 1, 4, 7, 1, 2, '2024-08-06 08:17:08', '2024-08-06 08:17:08'),
(6, 2, 1, 1, 1, 3, '2024-08-06 09:58:59', '2024-08-06 09:58:59'),
(7, 2, 4, 7, 1, 2, '2024-08-06 09:58:59', '2024-08-06 09:58:59');

-- --------------------------------------------------------

--
-- Table structure for table `printers`
--

CREATE TABLE `printers` (
  `printer_id` int(11) NOT NULL,
  `printer_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `printers`
--

INSERT INTO `printers` (`printer_id`, `printer_name`, `created_at`, `updated_at`) VALUES
(1, 'PRINTER KASIR', '2024-08-04 22:53:16', '2024-08-04 22:53:16'),
(2, 'PRINTER DAPUR', '2024-08-04 22:53:36', '2024-08-04 22:53:36'),
(3, 'PRINTER BAR', '2024-08-04 22:53:42', '2024-08-04 22:53:42');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Jeruk', 3, '2024-08-04 20:14:00', '2024-08-04 20:14:00'),
(2, 'Teh', 3, '2024-08-04 20:14:28', '2024-08-04 20:14:28'),
(3, 'Kopi', 3, '2024-08-04 20:14:37', '2024-08-04 20:14:37'),
(4, 'Mie', 2, '2024-08-04 20:15:01', '2024-08-04 20:15:01'),
(5, 'Nasi Goreng', 2, '2024-08-04 20:15:12', '2024-08-04 20:15:12'),
(6, 'Nasi Goreng + Jeruk Dingin', 1, '2024-08-04 20:16:07', '2024-08-04 20:16:07');

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `table_id` int(11) NOT NULL,
  `table_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`table_id`, `table_name`, `created_at`, `updated_at`) VALUES
(1, 'MEJA NO 1', '2024-08-04 21:57:00', '2024-08-04 21:57:00'),
(2, 'MEJA NO 2', '2024-08-04 21:57:07', '2024-08-04 21:57:07'),
(3, 'MEJA NO 3', '2024-08-04 21:57:13', '2024-08-04 21:57:13');

-- --------------------------------------------------------

--
-- Table structure for table `variants`
--

CREATE TABLE `variants` (
  `variant_id` int(11) NOT NULL,
  `variant_name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `variants`
--

INSERT INTO `variants` (`variant_id`, `variant_name`, `price`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 'DINGIN', 12000.00, 1, '2024-08-04 20:43:40', '2024-08-04 20:43:40'),
(2, 'PANAS', 10000.00, 1, '2024-08-04 20:44:12', '2024-08-04 20:44:12'),
(3, 'TAWAR', 5000.00, 2, '2024-08-04 20:46:37', '2024-08-04 20:48:31'),
(4, 'MANIS', 8000.00, 2, '2024-08-04 20:46:58', '2024-08-04 20:48:10'),
(5, 'DINGIN', 8000.00, 3, '2024-08-04 20:49:38', '2024-08-04 20:49:38'),
(6, 'PANAS', 6000.00, 3, '2024-08-04 20:49:50', '2024-08-04 20:49:50'),
(7, 'GORENG', 15000.00, 4, '2024-08-04 20:54:16', '2024-08-04 20:54:16'),
(8, 'KUAH', 15000.00, 4, '2024-08-04 20:54:24', '2024-08-04 20:54:24'),
(11, 'promo', 23000.00, 6, '2024-08-04 21:15:43', '2024-08-04 21:15:43'),
(13, 'Nasi Goreng', 15000.00, 5, '2024-08-04 21:44:21', '2024-08-04 21:44:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `table_id` (`table_id`);

--
-- Indexes for table `orders_items`
--
ALTER TABLE `orders_items`
  ADD PRIMARY KEY (`order_item_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `variant_id` (`variant_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `printers`
--
ALTER TABLE `printers`
  ADD PRIMARY KEY (`printer_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`table_id`);

--
-- Indexes for table `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`variant_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders_items`
--
ALTER TABLE `orders_items`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `printers`
--
ALTER TABLE `printers`
  MODIFY `printer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `table_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `variants`
--
ALTER TABLE `variants`
  MODIFY `variant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`table_id`) REFERENCES `tables` (`table_id`);

--
-- Constraints for table `orders_items`
--
ALTER TABLE `orders_items`
  ADD CONSTRAINT `orders_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `orders_items_ibfk_3` FOREIGN KEY (`variant_id`) REFERENCES `variants` (`variant_id`),
  ADD CONSTRAINT `orders_items_ibfk_4` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);

--
-- Constraints for table `variants`
--
ALTER TABLE `variants`
  ADD CONSTRAINT `variants_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
