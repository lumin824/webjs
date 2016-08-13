CREATE TABLE `think_gs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `zch` varchar(255) NOT NULL DEFAULT '' COMMENT '注册号/统一社会信用代码',
  `mc` varchar(255) NOT NULL DEFAULT '' COMMENT '名称',
  `lx` varchar(255) NOT NULL DEFAULT '' COMMENT '类型',
  `fddbr` varchar(255) NOT NULL DEFAULT '' COMMENT '法定代表人',
  `zczb` varchar(255) NOT NULL DEFAULT '' COMMENT '注册资本',
  `clrq` varchar(255) NOT NULL DEFAULT '' COMMENT '成立日期',
  `zs` varchar(255) NOT NULL DEFAULT '' COMMENT '住所',
  `yyqxz` varchar(255) NOT NULL DEFAULT '' COMMENT '营业期限自',
  `yyqxzh` varchar(255) NOT NULL DEFAULT '' COMMENT '营业期限至',
  `jyfw` varchar(255) NOT NULL DEFAULT '' COMMENT '经营范围',
  `djjg` varchar(255) NOT NULL DEFAULT '' COMMENT '登记机关',
  `hzrq` varchar(255) NOT NULL DEFAULT '' COMMENT '核准日期',
  `djzt` varchar(255) NOT NULL DEFAULT '' COMMENT '登记状态',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=247 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
