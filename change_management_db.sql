-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Aug 30, 2022 at 07:01 PM
-- Server version: 5.7.38
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `change_management_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `workspaceId` int(11) NOT NULL,
  `statusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `name`, `description`, `workspaceId`, `statusId`) VALUES
(1, 'Wanted Rewards', NULL, 1, 2),
(2, 'Kable Product Services', 'This is incredible by being a description. ', 1, 1),
(3, 'MarFlex Medical', NULL, 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `projectTasks`
--

CREATE TABLE `projectTasks` (
  `id` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `taskId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projectTasks`
--

INSERT INTO `projectTasks` (`id`, `projectId`, `taskId`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'In Progress'),
(2, 'In Queue'),
(3, 'Ready to Deploy'),
(4, 'Completed');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `duration` int(11) NOT NULL,
  `statusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `name`, `description`, `startDate`, `endDate`, `duration`, `statusId`) VALUES
(1, 'Convert Comments to Markdown', 'Convert comment to use MD instead of html', '2022-08-01', '2022-10-07', 54, 1);

-- --------------------------------------------------------

--
-- Table structure for table `taskTimelogs`
--

CREATE TABLE `taskTimelogs` (
  `id` int(11) NOT NULL,
  `taskId` int(11) NOT NULL,
  `timelogId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `taskUsers`
--

CREATE TABLE `taskUsers` (
  `id` int(11) NOT NULL,
  `owner` tinyint(1) NOT NULL,
  `taskId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `timelog`
--

CREATE TABLE `timelog` (
  `id` int(11) NOT NULL,
  `category` varchar(50) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  `date` date NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(11) DEFAULT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `authUserId` varchar(255) DEFAULT NULL,
  `authUserRole` varchar(255) DEFAULT NULL,
  `roles` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `phoneNumber`, `firstName`, `lastName`, `authUserId`, `authUserRole`, `roles`) VALUES
(1, 'tmoore', 'titusdmoore@gmail.com', NULL, 'Titus', 'Moore', 'sdaktjhlkjsdahliuh234kljahd', 'Admin', '');

-- --------------------------------------------------------

--
-- Table structure for table `userProjects`
--

CREATE TABLE `userProjects` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `userRoleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `userRole`
--

CREATE TABLE `userRole` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `workspace`
--

CREATE TABLE `workspace` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workspace`
--

INSERT INTO `workspace` (`id`, `name`) VALUES
(1, 'Edge Webware'),
(2, 'U! Creative');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`),
  ADD KEY `workspaceId` (`workspaceId`),
  ADD KEY `statusId` (`statusId`);

--
-- Indexes for table `projectTasks`
--
ALTER TABLE `projectTasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectId` (`projectId`),
  ADD KEY `taskId` (`taskId`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `statusId` (`statusId`);

--
-- Indexes for table `taskTimelogs`
--
ALTER TABLE `taskTimelogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `taskId` (`taskId`),
  ADD KEY `timelogId` (`timelogId`);

--
-- Indexes for table `taskUsers`
--
ALTER TABLE `taskUsers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `taskId` (`taskId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `timelog`
--
ALTER TABLE `timelog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `authUserId` (`authUserId`),
  ADD UNIQUE KEY `authUserRole` (`authUserRole`);

--
-- Indexes for table `userProjects`
--
ALTER TABLE `userProjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectId` (`projectId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `userRoleId` (`userRoleId`);

--
-- Indexes for table `userRole`
--
ALTER TABLE `userRole`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workspace`
--
ALTER TABLE `workspace`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `projectTasks`
--
ALTER TABLE `projectTasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `taskTimelogs`
--
ALTER TABLE `taskTimelogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `taskUsers`
--
ALTER TABLE `taskUsers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timelog`
--
ALTER TABLE `timelog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `userProjects`
--
ALTER TABLE `userProjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userRole`
--
ALTER TABLE `userRole`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `workspace`
--
ALTER TABLE `workspace`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`workspaceId`) REFERENCES `workspace` (`id`),
  ADD CONSTRAINT `project_ibfk_2` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`);

--
-- Constraints for table `projectTasks`
--
ALTER TABLE `projectTasks`
  ADD CONSTRAINT `projectTasks_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `project` (`id`),
  ADD CONSTRAINT `projectTasks_ibfk_2` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`);

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`);

--
-- Constraints for table `taskTimelogs`
--
ALTER TABLE `taskTimelogs`
  ADD CONSTRAINT `taskTimelogs_ibfk_1` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`),
  ADD CONSTRAINT `taskTimelogs_ibfk_2` FOREIGN KEY (`timelogId`) REFERENCES `timelog` (`id`);

--
-- Constraints for table `taskUsers`
--
ALTER TABLE `taskUsers`
  ADD CONSTRAINT `taskUsers_ibfk_1` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`),
  ADD CONSTRAINT `taskUsers_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `timelog`
--
ALTER TABLE `timelog`
  ADD CONSTRAINT `timelog_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `userProjects`
--
ALTER TABLE `userProjects`
  ADD CONSTRAINT `userProjects_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `project` (`id`),
  ADD CONSTRAINT `userProjects_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `userProjects_ibfk_3` FOREIGN KEY (`userRoleId`) REFERENCES `userRole` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
