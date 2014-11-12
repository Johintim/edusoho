<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20141111172644 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        $this->addSql("CREATE TABLE `knowledge` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
 `name` varchar(255) NOT NULL COMMENT '知识点名字',
 `code` varchar(64) NOT NULL COMMENT '知识点编码',
 `weight` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '知识点顺序',
 `parentId` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '知识点父Id',
 `isVisible` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '知识点是否可见',
 `categoryId` int(10) unsigned NOT NULL COMMENT '知识点分类',
 `createdTime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
 `description` text COMMENT '描述',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8");
        $this->addSql("ALTER TABLE `category` ADD `isSubject` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '是否是科目' AFTER `weight`;");
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
