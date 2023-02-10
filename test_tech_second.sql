-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 10 fév. 2023 à 16:45
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `test_tech_second`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `idadmin` int(11) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `new_place`
--

CREATE TABLE `new_place` (
  `idnew_place` int(11) NOT NULL,
  `etage` varchar(2) NOT NULL,
  `occupation` datetime DEFAULT NULL,
  `disponibilité` int(11) DEFAULT 0,
  `nom_de_place` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `new_place`
--

INSERT INTO `new_place` (`idnew_place`, `etage`, `occupation`, `disponibilité`, `nom_de_place`) VALUES
(27, '1', NULL, 0, 'A1'),
(28, '1', NULL, NULL, 'A2'),
(29, '1', NULL, NULL, 'A3'),
(30, '1', NULL, NULL, 'A4'),
(31, '2', NULL, NULL, 'A5'),
(32, '2', '2022-04-13 11:40:16', 148, 'B1'),
(33, '2', '2023-02-10 16:36:57', 0, 'B2'),
(34, '2', '2023-02-10 16:42:22', 0, 'B3'),
(36, '3', '2023-02-10 16:32:45', 0, 'B4'),
(37, '3', NULL, 0, 'C1'),
(38, '3', '2023-02-10 16:40:38', 0, 'C2'),
(39, '3', NULL, 0, 'C3');

-- --------------------------------------------------------

--
-- Structure de la table `payment`
--

CREATE TABLE `payment` (
  `idpayment` int(11) NOT NULL,
  `durée` varchar(45) DEFAULT NULL,
  `spot` varchar(45) DEFAULT NULL,
  `utilisateur` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `payment`
--

INSERT INTO `payment` (`idpayment`, `durée`, `spot`, `utilisateur`) VALUES
(4, '00:00:13', 'B3', '1');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `idusers` int(11) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `mail` varchar(45) NOT NULL,
  `mdp` varchar(200) DEFAULT NULL,
  `active` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`idusers`, `nom`, `prenom`, `mail`, `mdp`, `active`) VALUES
(1, 'Lator', 'JeanMarie', 'jeanmar-97.1@hotmail.fr', '$2b$10$ANBcyvl8HebBdJN8NFh7jep2RAwHPvw1Ov.Z/rLm3UlS/IqjxblCO', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`idadmin`),
  ADD UNIQUE KEY `idadmin_UNIQUE` (`idadmin`),
  ADD UNIQUE KEY `mail_UNIQUE` (`mail`);

--
-- Index pour la table `new_place`
--
ALTER TABLE `new_place`
  ADD PRIMARY KEY (`idnew_place`),
  ADD UNIQUE KEY `idnew_place_UNIQUE` (`idnew_place`);

--
-- Index pour la table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`idpayment`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idusers`,`mail`),
  ADD UNIQUE KEY `mail_UNIQUE` (`mail`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `idadmin` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `new_place`
--
ALTER TABLE `new_place`
  MODIFY `idnew_place` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `payment`
--
ALTER TABLE `payment`
  MODIFY `idpayment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `idusers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
