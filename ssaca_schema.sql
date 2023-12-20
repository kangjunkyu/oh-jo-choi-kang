-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ssaca
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ssaca
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ssaca` DEFAULT CHARACTER SET utf8 ;
USE `ssaca` ;

-- -----------------------------------------------------
-- Table `ssaca`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssaca`.`user` (
  `id` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ssaca`.`board`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssaca`.`board` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `writer` VARCHAR(45) NOT NULL,
  `content` TEXT NOT NULL,
  `regDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `viewCnt` INT NOT NULL DEFAULT 0,
  `price` INT NOT NULL,
  `img` TEXT,
  `orgImg` TEXT,
  `status` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_board_user_idx` (`writer` ASC) VISIBLE,
  CONSTRAINT `fk_board_user`
    FOREIGN KEY (`writer`)
    REFERENCES `ssaca`.`user` (`id`)
	ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `ssaca`.`chatRoom`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssaca`.`chatRoom` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sellerId` VARCHAR(45) NOT NULL,
  `userId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_chatRoom_user1_idx` (`sellerId` ASC) VISIBLE,
  INDEX `fk_chatRoom_user2_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `fk_chatRoom_user1`
    FOREIGN KEY (`sellerId`)
    REFERENCES `ssaca`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_chatRoom_user2`
    FOREIGN KEY (`userId`)
    REFERENCES `ssaca`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ssaca`.`chatMessage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssaca`.`chatMessage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `roomId` INT NOT NULL,
  `userId` VARCHAR(45) NOT NULL,
  `message` TEXT NOT NULL,
  `regDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `img` TEXT,
  `orgImg` TEXT,
  PRIMARY KEY (`id`),
  INDEX `fk_chatMessage_chatRoom1_idx` (`roomId` ASC) VISIBLE,
  CONSTRAINT `fk_chatMessage_chatRoom1`
    FOREIGN KEY (`roomId`)
    REFERENCES `ssaca`.`chatRoom` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `ssaca`.`like` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(45) NOT NULL,
    `boardId` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_like_user_idx` (`userId` ASC) VISIBLE,
    INDEX `fk_like_board_idx` (`boardId` ASC) VISIBLE,
    CONSTRAINT `fk_like_user`
        FOREIGN KEY (`userId`)
        REFERENCES `ssaca`.`user` (`id`)
        ON DELETE CASCADE
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_like_board`
        FOREIGN KEY (`boardId`)
        REFERENCES `ssaca`.`board` (`id`)
        ON DELETE CASCADE
        ON UPDATE NO ACTION)
        ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



