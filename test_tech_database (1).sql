CREATE DATABASE  IF NOT EXISTS `test_tech_second` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `test_tech_second`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: test_tech_second
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `idadmin` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idadmin`),
  UNIQUE KEY `idadmin_UNIQUE` (`idadmin`),
  UNIQUE KEY `mail_UNIQUE` (`mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place_park`
--

DROP TABLE IF EXISTS `place_park`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place_park` (
  `idplace_park` varchar(2) NOT NULL,
  `etage` int NOT NULL,
  `assigné` int DEFAULT NULL,
  PRIMARY KEY (`idplace_park`),
  UNIQUE KEY `idplace_park_UNIQUE` (`idplace_park`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place_park`
--

LOCK TABLES `place_park` WRITE;
/*!40000 ALTER TABLE `place_park` DISABLE KEYS */;
INSERT INTO `place_park` VALUES ('A1',1,NULL),('A2',1,NULL),('A3',1,NULL),('A4',1,NULL),('A5',1,NULL),('B1',2,NULL),('B2',2,NULL),('B3',2,NULL),('B4',2,NULL),('B5',2,NULL),('C1',3,NULL),('C2',3,NULL),('C3',3,NULL),('C4',3,NULL),('C5',3,NULL);
/*!40000 ALTER TABLE `place_park` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `mail` varchar(45) NOT NULL,
  `mdp` varchar(200) DEFAULT NULL,
  `place_park_idplace_park` varchar(2) NOT NULL,
  PRIMARY KEY (`idusers`,`mail`,`place_park_idplace_park`),
  UNIQUE KEY `mail_UNIQUE` (`mail`),
  KEY `fk_users_place_park_idx` (`place_park_idplace_park`),
  CONSTRAINT `fk_users_place_park` FOREIGN KEY (`place_park_idplace_park`) REFERENCES `place_park` (`idplace_park`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (116,'Helow','Helow','jeanmar-97.1@hotmail.fr','$2b$10$Dh3bYzCpUs3vpp6BeVpuUOy6z1YCV0gDQaKxsv.Pqk0tRNSo0tCue',''),(124,'bouli','kazneu','fifif@hotmail.fr','$2b$10$MKOoOrsODXK1JJ68utDGoOmMJ24MCgbv92mTvJ5mXfNU2Zo8cx6Qq',''),(144,'Lator','JeanMarie','jeanmar-bole@hotmail.fr','$2b$10$Koww17TouQZLr0jsolp.heDHsyjeLSZ4TLv6jo32ZQuRe8sKS5Bdi',''),(148,'Lator','JeanMarie','lili@live.fr','$2b$10$4jLfjnYKu01BP5nmG2bMUe4SSbt5LJtr/iGE6qNi0/ikY09qD0.2q','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-08 16:54:57
