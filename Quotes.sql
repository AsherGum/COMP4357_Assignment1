-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 21, 2021 at 10:45 PM
-- Server version: 10.3.28-MariaDB-log
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ashergum_Quotes`
--

-- --------------------------------------------------------

--
-- Table structure for table `Quotes`
--

CREATE TABLE `Quotes` (
  `Quote` varchar(255) DEFAULT NULL,
  `Author` varchar(30) DEFAULT NULL,
  `QuoteID` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Quotes`
--

INSERT INTO `Quotes` (`Quote`, `Author`, `QuoteID`) VALUES
('You can fail at what you dont want so you might as well take a chance at doing what you love.', 'Jim Carry', 7),
('I just realized that Let me check my calendar is the adult version of Let me ask my mom', 'Noelle Chatham', 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Quotes`
--
ALTER TABLE `Quotes`
  ADD PRIMARY KEY (`QuoteID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Quotes`
--
ALTER TABLE `Quotes`
  MODIFY `QuoteID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
