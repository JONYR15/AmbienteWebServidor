-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-10-2017 a las 04:25:16
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lineas telefonicas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineas`
--

CREATE TABLE `lineas` (
  `numero` int(11) NOT NULL,
  `operador` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `plan` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `marcacelular` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `modelocelular` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `fechafirmacontrato` date NOT NULL,
  `plazomeses` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `lineas`
--

INSERT INTO `lineas` (`numero`, `operador`, `plan`, `marcacelular`, `modelocelular`, `fechafirmacontrato`, `plazomeses`) VALUES
(123456, 'movistar', 'gratis', 'nokia', '15', '2017-10-01', 6),
(321654, 'tigo', 'gratis', 'motorola', 'g2', '0000-00-00', 0),
(654123, 'tigo', '5', 'motorola', 'g2', '0000-00-00', 5),
(654321, 'tigo', '5', 'motorola', 'g2', '0000-00-00', 5),
(4523424, 'gratis', 'tigo', 'motorola', 'g2', '1999-12-16', 5),
(123456789, 'movistar', 'gratis', 'motorola', 'de', '1999-12-16', 4),
(2147483647, 'tigo', '5', 'motorola', 'g2', '1999-12-16', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lineas`
--
ALTER TABLE `lineas`
  ADD PRIMARY KEY (`numero`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
