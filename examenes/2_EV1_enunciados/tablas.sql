-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 15, 2022 at 09:34 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tablas`
--

-- --------------------------------------------------------

--
-- Table structure for table `disco_duro`
--

CREATE TABLE `disco_duro` (
  `id` int(2) NOT NULL DEFAULT '0',
  `opcion3` varchar(255) NOT NULL DEFAULT '',
  `id_opcion1` int(2) NOT NULL DEFAULT '0',
  `id_opcion2` int(2) NOT NULL DEFAULT '0',
  `precio` int(2) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `disco_duro`
--

INSERT INTO `disco_duro` (`id`, `opcion3`, `id_opcion1`, `id_opcion2`, `precio`) VALUES
(1, '500GB', 1, 1, 400),
(2, '750GB', 1, 1, 500),
(3, '500GB', 2, 2, 500),
(4, '750GB', 2, 2, 550),
(5, '500GB', 2, 3, 600),
(6, '750GB', 2, 3, 650),
(7, '500GB', 2, 4, 800),
(8, '1TB', 2, 4, 900),
(9, '500GB', 3, 5, 1000),
(10, '750GB', 3, 5, 1100),
(11, '500GB', 3, 6, 1400),
(12, '750GB', 3, 6, 1500),
(13, '500GB', 4, 7, 400),
(14, '750GB', 4, 7, 500),
(15, '500GB', 4, 8, 600),
(16, '750GB', 4, 8, 700),
(17, '500GB', 4, 9, 800),
(18, '750GB', 4, 9, 900);

-- --------------------------------------------------------

--
-- Table structure for table `procesador`
--

CREATE TABLE `procesador` (
  `id` int(2) NOT NULL DEFAULT '0',
  `opcion2` varchar(255) NOT NULL DEFAULT '',
  `id_opcion1` int(2) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `procesador`
--

INSERT INTO `procesador` (`id`, `opcion2`, `id_opcion1`) VALUES
(1, 'i3', 1),
(2, 'i3', 2),
(3, 'i5', 2),
(4, 'i7', 2),
(5, 'i5', 3),
(6, 'i7', 3),
(7, 'i3', 4),
(8, 'i5', 4),
(9, 'i7', 4);

-- --------------------------------------------------------

--
-- Table structure for table `tipo`
--

CREATE TABLE `tipo` (
  `id` int(2) NOT NULL DEFAULT '0',
  `opcion1` varchar(255) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tipo`
--

INSERT INTO `tipo` (`id`, `opcion1`) VALUES
(1, 'Notebook'),
(2, 'Portatil'),
(3, 'Ultrabook'),
(4, 'Portable');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `disco_duro`
--
ALTER TABLE `disco_duro`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `procesador`
--
ALTER TABLE `procesador`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo`
--
ALTER TABLE `tipo`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
