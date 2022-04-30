// Initialize tables - TODO: load from api
class othercode {
    index;
    org5;
    account;
    description;

    constructor(index,org5,account,description) {
        this.index = index;
        this.org5 = org5;
        this.account = account;
        this.description = description;
    }
}

class account {
    index;
    org1;
    org2;
    org3;
    org4;
    active;

    constructor(index,org1,org2,org3,org4,active) {
        this.index = index;
        this.org1 = org1;
        this.org2 = org2;
        this.org3 = org3;
        this.org4 = org4;
        this.active = active;
    }
}

class user {
    index;
    name;
    active;
}

var othercodes = [];

othercodes.push(new othercode(63,'100','1','Personal Services F/T'));
othercodes.push(new othercode(64,'100','12','Personal Services O/T'));
othercodes.push(new othercode(65,'100','13','Personal Services P/T'));
othercodes.push(new othercode(66,'200','20','Equipment'));
othercodes.push(new othercode(67,'400','411','Fuel'));
othercodes.push(new othercode(68,'400','412','Office Supplies'));
othercodes.push(new othercode(69,'400','414','Maintenance'));
othercodes.push(new othercode(70,'400','415','Athletic Equipment'));
othercodes.push(new othercode(71,'400','417','Arts and Crafts'));
othercodes.push(new othercode(72,'400','421','Uniforms'));
othercodes.push(new othercode(73,'400','425','Books and Periodicals'));
othercodes.push(new othercode(74,'400','426','Spec. Dept. Supplies'));
othercodes.push(new othercode(75,'400','427','Trophies, Plaques and Awards'));
othercodes.push(new othercode(76,'400','431','Food'));
othercodes.push(new othercode(77,'400','432','First Aid Supplies'));
othercodes.push(new othercode(78,'400','435','Prof. Bus. Exp.'));
othercodes.push(new othercode(79,'400','449','Misc. Supplies & Mat.'));
othercodes.push(new othercode(80,'400','451','Insurance'));
othercodes.push(new othercode(81,'400','453','Telephone'));
othercodes.push(new othercode(82,'400','454','Traveling Expenses'));
othercodes.push(new othercode(83,'400','460','Repairs to Tools and Equipment'));
othercodes.push(new othercode(84,'400','461','Repairs to Buildings and Plant'));
othercodes.push(new othercode(85,'400','463','Buses'));
othercodes.push(new othercode(86,'400','469','Printing'));
othercodes.push(new othercode(87,'400','479','Transaction Fees'));
othercodes.push(new othercode(88,'400','480','Munic. Association Dues'));
othercodes.push(new othercode(89,'400','483','Care of Grounds'));
othercodes.push(new othercode(90,'400','483.1','Care of Trees'));
othercodes.push(new othercode(91,'400','485','Postage'));
othercodes.push(new othercode(92,'400','496','Prof. Development'));
othercodes.push(new othercode(93,'400','499','Other Contractual Services'));
othercodes.push(new othercode(94,'400','428','Cleaning and Sanitary Supplies'));
othercodes.push(new othercode(95,'400','429','Purchase of Water'));
othercodes.push(new othercode(96,'400','433','Chemicals'));

var accounts = [];

accounts.push(new account(42,'A','7020','ADMIN','ADMIN',true));
accounts.push(new account(43,'A','7020','CAMPS','DAY',true));
accounts.push(new account(44,'A','7020','CAMPS','SOCCR',true));
accounts.push(new account(45,'A','7020','CAMPS','SPORT',true));
accounts.push(new account(46,'A','7020','CAMPS','TRAVL',true));
accounts.push(new account(47,'A','7020','CAMPS','VIDEO',true));
accounts.push(new account(48,'A','7020','NATUR','MAINT',true));
accounts.push(new account(49,'A','7020','NATUR','PROG',true));
accounts.push(new account(50,'A','7020','PLGRD','MAINT',true));
accounts.push(new account(51,'A','7020','REC','ATHL',true));
accounts.push(new account(52,'A','7020','REC','CULT',true));
accounts.push(new account(53,'A','7020','REC','DISAB',true));
accounts.push(new account(54,'A','7020','REC','INDR',true));
accounts.push(new account(55,'A','7020','REC','OTHER',true));
accounts.push(new account(56,'A','7020','REC','PLTN',true));
accounts.push(new account(57,'A','7020','REC','SPEC',true));
accounts.push(new account(58,'A','7020','SRS','CTR',true));
accounts.push(new account(59,'A','7020','SRS','PROG',true));
accounts.push(new account(60,'A','7020','TNIS','TNIS',true));
accounts.push(new account(61,'ER','2000','POOL','POOL',true));

var users = [];

users.push(new user(1,'Chris',true));