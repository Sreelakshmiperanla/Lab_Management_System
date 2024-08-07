-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: lab_management
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `credentials`
--

DROP TABLE IF EXISTS `credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credentials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credentials`
--

LOCK TABLES `credentials` WRITE;
/*!40000 ALTER TABLE `credentials` DISABLE KEYS */;
INSERT INTO `credentials` VALUES (1,'sreelakshmi','sreelakshmiperanla043@gmail.com','12345678');
/*!40000 ALTER TABLE `credentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `queries`
--

DROP TABLE IF EXISTS `queries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `queries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `empid` varchar(20) NOT NULL,
  `course` varchar(50) NOT NULL,
  `year` varchar(10) NOT NULL,
  `branch` varchar(50) NOT NULL,
  `section` varchar(10) NOT NULL,
  `lab` varchar(50) NOT NULL,
  `room` varchar(20) NOT NULL,
  `block_no` varchar(20) NOT NULL,
  `floor_no` varchar(20) NOT NULL,
  `token_number` varchar(36) DEFAULT NULL,
  `query` text NOT NULL,
  `resolved` enum('Pending','Processing','Resolved') NOT NULL DEFAULT 'Pending',
  `submission_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queries`
--

LOCK TABLES `queries` WRITE;
/*!40000 ALTER TABLE `queries` DISABLE KEYS */;
INSERT INTO `queries` VALUES (1,'sreelakshmi','sreelakshmiperanla043@gmail.com','306','B.Tech','2','AIML','b','Aiml','321','2','2','4632','\'Projector Not Working\'','Resolved','2023-12-16 22:29:34'),(2,'Sreelakshmi','sreelakshmiperanla043@gmail.com','306','B.Tech','2','AIML','s-20','Aiml','321','2','2','1767','\'Internet Not Working for all PCs\'','Resolved','2024-02-17 13:40:52'),(3,'sreelakshmi','sreelakshmiperanla043@gmail.com','306','B.Tech','2','CSM','b','Aiml','321','2','2','3193','\'Projector Not Working\'','Resolved','2024-05-05 22:14:08'),(4,'Sreelakshmi','sreelakshmiperanla043@gmail.com','306','MBA','2','MECH','s-20','Aiml','241','2','2','7167','\'Projector Not Working\'','Resolved','2024-05-06 21:48:46'),(5,'sreelakshmi','sreelakshmiperanla043@gmail.com','306','B.Tech','2','MECH','s-20','Aiml','321','2','2','6226','\'Projector Not Working\'','Resolved','2024-05-06 23:15:51'),(6,'sreelakshmi','sreelakshmiperanla043@gmail.com','306','M.Tech','3','MECH','b','Aiml','321','2','2','7769','\'Projector Not Working\'','Resolved','2024-05-08 12:21:35'),(7,'shanmuk','sreelakshmiperanla043@gmail.com','1','B.Tech','2','CSM','s-20','PYTHON lab','321','2','2','5596','\'Internet Not Working for all PCs\'','Resolved','2024-05-08 12:25:04'),(8,'ravikumar','sreelakshmiperanla043@gmail.com','23','B.Tech','3','CSC','2','aiml','34','2','1','8799','\'Projector Not Working\'','Resolved','2024-05-11 00:41:43'),(9,'sreelakshmi','sreelakshmiperanla043@gmail.com','306','M.Tech','2','AIML','b','PYTHON lab','34','2','2','2914','\'Projector Not Working\'','Pending','2024-05-11 20:22:11'),(10,'sreelakshmi','sreelakshmiperanla043@gmail.com','306','B.Tech','2','AIML','1','PYTHON lab','241','2','2','3713','\'Internet Not Working for all PCs\'','Pending','2024-05-11 20:26:23');
/*!40000 ALTER TABLE `queries` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-12 13:24:26
