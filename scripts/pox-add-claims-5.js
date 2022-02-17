
// node proposal-emergency-shutdown.js
require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(1199), 'ustx': tx.uintCV(39742385) }),
    tx.tupleCV({ 'to': tx.uintCV(1201), 'ustx': tx.uintCV(1355181) }),
    tx.tupleCV({ 'to': tx.uintCV(1202), 'ustx': tx.uintCV(589943) }),
    tx.tupleCV({ 'to': tx.uintCV(1207), 'ustx': tx.uintCV(121922) }),
    tx.tupleCV({ 'to': tx.uintCV(1208), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1209), 'ustx': tx.uintCV(169117) }),
    tx.tupleCV({ 'to': tx.uintCV(1211), 'ustx': tx.uintCV(1600713) }),
    tx.tupleCV({ 'to': tx.uintCV(1212), 'ustx': tx.uintCV(7894283) }),
    tx.tupleCV({ 'to': tx.uintCV(1213), 'ustx': tx.uintCV(39330) }),
    tx.tupleCV({ 'to': tx.uintCV(1214), 'ustx': tx.uintCV(39869336) }),
    tx.tupleCV({ 'to': tx.uintCV(1215), 'ustx': tx.uintCV(25914415) }),
    tx.tupleCV({ 'to': tx.uintCV(1217), 'ustx': tx.uintCV(5980250) }),
    tx.tupleCV({ 'to': tx.uintCV(1219), 'ustx': tx.uintCV(353966) }),
    tx.tupleCV({ 'to': tx.uintCV(1220), 'ustx': tx.uintCV(17814968) }),
    tx.tupleCV({ 'to': tx.uintCV(1221), 'ustx': tx.uintCV(51128) }),
    tx.tupleCV({ 'to': tx.uintCV(1224), 'ustx': tx.uintCV(78659) }),
    tx.tupleCV({ 'to': tx.uintCV(1225), 'ustx': tx.uintCV(791439) }),
    tx.tupleCV({ 'to': tx.uintCV(1226), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1228), 'ustx': tx.uintCV(1242814) }),
    tx.tupleCV({ 'to': tx.uintCV(1230), 'ustx': tx.uintCV(1297876) }),
    tx.tupleCV({ 'to': tx.uintCV(1231), 'ustx': tx.uintCV(251709) }),
    tx.tupleCV({ 'to': tx.uintCV(1232), 'ustx': tx.uintCV(39329567) }),
    tx.tupleCV({ 'to': tx.uintCV(1233), 'ustx': tx.uintCV(3974138) }),
    tx.tupleCV({ 'to': tx.uintCV(1234), 'ustx': tx.uintCV(70793) }),
    tx.tupleCV({ 'to': tx.uintCV(1235), 'ustx': tx.uintCV(1987119) }),
    tx.tupleCV({ 'to': tx.uintCV(1237), 'ustx': tx.uintCV(39869336) }),
    tx.tupleCV({ 'to': tx.uintCV(1239), 'ustx': tx.uintCV(12370033) }),
    tx.tupleCV({ 'to': tx.uintCV(1241), 'ustx': tx.uintCV(5671323) }),
    tx.tupleCV({ 'to': tx.uintCV(1242), 'ustx': tx.uintCV(29512695) }),
    tx.tupleCV({ 'to': tx.uintCV(1243), 'ustx': tx.uintCV(1392267) }),
    tx.tupleCV({ 'to': tx.uintCV(1244), 'ustx': tx.uintCV(993534) }),
    tx.tupleCV({ 'to': tx.uintCV(1245), 'ustx': tx.uintCV(2864172) }),
    tx.tupleCV({ 'to': tx.uintCV(1246), 'ustx': tx.uintCV(9832392) }),
    tx.tupleCV({ 'to': tx.uintCV(1247), 'ustx': tx.uintCV(28261534) }),
    tx.tupleCV({ 'to': tx.uintCV(1250), 'ustx': tx.uintCV(7079322) }),
    tx.tupleCV({ 'to': tx.uintCV(1251), 'ustx': tx.uintCV(1573183) }),
    tx.tupleCV({ 'to': tx.uintCV(1252), 'ustx': tx.uintCV(19665) }),
    tx.tupleCV({ 'to': tx.uintCV(1253), 'ustx': tx.uintCV(1573183) }),
    tx.tupleCV({ 'to': tx.uintCV(1258), 'ustx': tx.uintCV(78659) }),
    tx.tupleCV({ 'to': tx.uintCV(1259), 'ustx': tx.uintCV(412960) }),
    tx.tupleCV({ 'to': tx.uintCV(1262), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1263), 'ustx': tx.uintCV(16660040) }),
    tx.tupleCV({ 'to': tx.uintCV(1264), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1268), 'ustx': tx.uintCV(65254326) }),
    tx.tupleCV({ 'to': tx.uintCV(1270), 'ustx': tx.uintCV(9534012) }),
    tx.tupleCV({ 'to': tx.uintCV(1271), 'ustx': tx.uintCV(35713362) }),
    tx.tupleCV({ 'to': tx.uintCV(1272), 'ustx': tx.uintCV(47195) }),
    tx.tupleCV({ 'to': tx.uintCV(1273), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1275), 'ustx': tx.uintCV(35752957) }),
    tx.tupleCV({ 'to': tx.uintCV(1276), 'ustx': tx.uintCV(1390377) }),
    tx.tupleCV({ 'to': tx.uintCV(1278), 'ustx': tx.uintCV(794501) }),
    tx.tupleCV({ 'to': tx.uintCV(1279), 'ustx': tx.uintCV(126679412) }),
    tx.tupleCV({ 'to': tx.uintCV(1282), 'ustx': tx.uintCV(863270) }),
    tx.tupleCV({ 'to': tx.uintCV(1283), 'ustx': tx.uintCV(19665) }),
    tx.tupleCV({ 'to': tx.uintCV(1284), 'ustx': tx.uintCV(39330) }),
    tx.tupleCV({ 'to': tx.uintCV(1285), 'ustx': tx.uintCV(39330) }),
    tx.tupleCV({ 'to': tx.uintCV(1289), 'ustx': tx.uintCV(3916435) }),
    tx.tupleCV({ 'to': tx.uintCV(1290), 'ustx': tx.uintCV(21002635) }),
    tx.tupleCV({ 'to': tx.uintCV(1291), 'ustx': tx.uintCV(936044) }),
    tx.tupleCV({ 'to': tx.uintCV(1293), 'ustx': tx.uintCV(34603645) }),
    tx.tupleCV({ 'to': tx.uintCV(1294), 'ustx': tx.uintCV(98324) }),
    tx.tupleCV({ 'to': tx.uintCV(1296), 'ustx': tx.uintCV(6356008) }),
    tx.tupleCV({ 'to': tx.uintCV(1297), 'ustx': tx.uintCV(2687192) }),
    tx.tupleCV({ 'to': tx.uintCV(1298), 'ustx': tx.uintCV(192715) }),
    tx.tupleCV({ 'to': tx.uintCV(1301), 'ustx': tx.uintCV(2717673) }),
    tx.tupleCV({ 'to': tx.uintCV(1308), 'ustx': tx.uintCV(3146365) }),
    tx.tupleCV({ 'to': tx.uintCV(1309), 'ustx': tx.uintCV(19862526) }),
    tx.tupleCV({ 'to': tx.uintCV(1310), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1311), 'ustx': tx.uintCV(4106322) }),
    tx.tupleCV({ 'to': tx.uintCV(1316), 'ustx': tx.uintCV(3959953) }),
    tx.tupleCV({ 'to': tx.uintCV(1318), 'ustx': tx.uintCV(6311515) }),
    tx.tupleCV({ 'to': tx.uintCV(1319), 'ustx': tx.uintCV(11798870) }),
    tx.tupleCV({ 'to': tx.uintCV(1321), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1322), 'ustx': tx.uintCV(3959953) }),
    tx.tupleCV({ 'to': tx.uintCV(1324), 'ustx': tx.uintCV(791991) }),
    tx.tupleCV({ 'to': tx.uintCV(1326), 'ustx': tx.uintCV(395995) }),
    tx.tupleCV({ 'to': tx.uintCV(1329), 'ustx': tx.uintCV(63560083) }),
    tx.tupleCV({ 'to': tx.uintCV(1330), 'ustx': tx.uintCV(79215300) }),
    tx.tupleCV({ 'to': tx.uintCV(1331), 'ustx': tx.uintCV(79215300) }),
    tx.tupleCV({ 'to': tx.uintCV(1332), 'ustx': tx.uintCV(79215300) }),
    tx.tupleCV({ 'to': tx.uintCV(1333), 'ustx': tx.uintCV(39607650) }),
    tx.tupleCV({ 'to': tx.uintCV(1334), 'ustx': tx.uintCV(19665) }),
    tx.tupleCV({ 'to': tx.uintCV(1335), 'ustx': tx.uintCV(39607650) }),
    tx.tupleCV({ 'to': tx.uintCV(1338), 'ustx': tx.uintCV(5081041) }),
    tx.tupleCV({ 'to': tx.uintCV(1339), 'ustx': tx.uintCV(64893785) }),
    tx.tupleCV({ 'to': tx.uintCV(1341), 'ustx': tx.uintCV(35646885) }),
    tx.tupleCV({ 'to': tx.uintCV(1345), 'ustx': tx.uintCV(397251) }),
    tx.tupleCV({ 'to': tx.uintCV(1349), 'ustx': tx.uintCV(589943) }),
    tx.tupleCV({ 'to': tx.uintCV(1351), 'ustx': tx.uintCV(20836094) }),
    tx.tupleCV({ 'to': tx.uintCV(1354), 'ustx': tx.uintCV(7583512) }),
    tx.tupleCV({ 'to': tx.uintCV(1356), 'ustx': tx.uintCV(397251) }),
    tx.tupleCV({ 'to': tx.uintCV(1357), 'ustx': tx.uintCV(385430) }),
    tx.tupleCV({ 'to': tx.uintCV(1359), 'ustx': tx.uintCV(7547846) }),
    tx.tupleCV({ 'to': tx.uintCV(1360), 'ustx': tx.uintCV(397251) }),
    tx.tupleCV({ 'to': tx.uintCV(1361), 'ustx': tx.uintCV(247776) }),
    tx.tupleCV({ 'to': tx.uintCV(1362), 'ustx': tx.uintCV(4369756) }),
    tx.tupleCV({ 'to': tx.uintCV(1365), 'ustx': tx.uintCV(373631) }),
    tx.tupleCV({ 'to': tx.uintCV(1370), 'ustx': tx.uintCV(12747685) }),
    tx.tupleCV({ 'to': tx.uintCV(1374), 'ustx': tx.uintCV(700066) }),
    tx.tupleCV({ 'to': tx.uintCV(1379), 'ustx': tx.uintCV(279240) }),
    tx.tupleCV({ 'to': tx.uintCV(1380), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1381), 'ustx': tx.uintCV(2359774) }),
    tx.tupleCV({ 'to': tx.uintCV(1383), 'ustx': tx.uintCV(45215372) }),
    tx.tupleCV({ 'to': tx.uintCV(1384), 'ustx': tx.uintCV(14256968) }),
    tx.tupleCV({ 'to': tx.uintCV(1385), 'ustx': tx.uintCV(12758511) }),
    tx.tupleCV({ 'to': tx.uintCV(1389), 'ustx': tx.uintCV(13768861) }),
    tx.tupleCV({ 'to': tx.uintCV(1390), 'ustx': tx.uintCV(51642567) }),
    tx.tupleCV({ 'to': tx.uintCV(1394), 'ustx': tx.uintCV(34123996) }),
    tx.tupleCV({ 'to': tx.uintCV(1395), 'ustx': tx.uintCV(460156) }),
    tx.tupleCV({ 'to': tx.uintCV(1400), 'ustx': tx.uintCV(16388630) }),
    tx.tupleCV({ 'to': tx.uintCV(1404), 'ustx': tx.uintCV(993126) }),
    tx.tupleCV({ 'to': tx.uintCV(1410), 'ustx': tx.uintCV(33353224) }),
    tx.tupleCV({ 'to': tx.uintCV(1411), 'ustx': tx.uintCV(983239) }),
    tx.tupleCV({ 'to': tx.uintCV(1417), 'ustx': tx.uintCV(21631262) }),
    tx.tupleCV({ 'to': tx.uintCV(1424), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1425), 'ustx': tx.uintCV(2666545) }),
    tx.tupleCV({ 'to': tx.uintCV(1434), 'ustx': tx.uintCV(397251) }),
    tx.tupleCV({ 'to': tx.uintCV(1436), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1438), 'ustx': tx.uintCV(7275970) }),
    tx.tupleCV({ 'to': tx.uintCV(1441), 'ustx': tx.uintCV(1160222) }),
    tx.tupleCV({ 'to': tx.uintCV(1442), 'ustx': tx.uintCV(23598) }),
    tx.tupleCV({ 'to': tx.uintCV(1443), 'ustx': tx.uintCV(2741060) }),
    tx.tupleCV({ 'to': tx.uintCV(1447), 'ustx': tx.uintCV(37977115) }),
    tx.tupleCV({ 'to': tx.uintCV(1448), 'ustx': tx.uintCV(711865) }),
    tx.tupleCV({ 'to': tx.uintCV(1453), 'ustx': tx.uintCV(794501) }),
    tx.tupleCV({ 'to': tx.uintCV(1457), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1465), 'ustx': tx.uintCV(3126701) }),
    tx.tupleCV({ 'to': tx.uintCV(1466), 'ustx': tx.uintCV(2780754) }),
    tx.tupleCV({ 'to': tx.uintCV(1468), 'ustx': tx.uintCV(51128) }),
    tx.tupleCV({ 'to': tx.uintCV(1473), 'ustx': tx.uintCV(294972) }),
    tx.tupleCV({ 'to': tx.uintCV(1474), 'ustx': tx.uintCV(11157399) }),
    tx.tupleCV({ 'to': tx.uintCV(1476), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1477), 'ustx': tx.uintCV(3539661) }),
    tx.tupleCV({ 'to': tx.uintCV(1479), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1480), 'ustx': tx.uintCV(1179887) }),
    tx.tupleCV({ 'to': tx.uintCV(1482), 'ustx': tx.uintCV(271298) }),
    tx.tupleCV({ 'to': tx.uintCV(1483), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1488), 'ustx': tx.uintCV(397346) }),
    tx.tupleCV({ 'to': tx.uintCV(1489), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1490), 'ustx': tx.uintCV(145519) }),
    tx.tupleCV({ 'to': tx.uintCV(1492), 'ustx': tx.uintCV(7866) }),
    tx.tupleCV({ 'to': tx.uintCV(1494), 'ustx': tx.uintCV(377564) }),
    tx.tupleCV({ 'to': tx.uintCV(1496), 'ustx': tx.uintCV(9933650) }),
    tx.tupleCV({ 'to': tx.uintCV(1499), 'ustx': tx.uintCV(983239) }),
    tx.tupleCV({ 'to': tx.uintCV(1500), 'ustx': tx.uintCV(883251) }),
    tx.tupleCV({ 'to': tx.uintCV(1502), 'ustx': tx.uintCV(3973460) }),
    tx.tupleCV({ 'to': tx.uintCV(1504), 'ustx': tx.uintCV(6489378) }),
    tx.tupleCV({ 'to': tx.uintCV(1507), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1508), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1509), 'ustx': tx.uintCV(1179887) }),
    tx.tupleCV({ 'to': tx.uintCV(1510), 'ustx': tx.uintCV(4471772) }),
    tx.tupleCV({ 'to': tx.uintCV(1512), 'ustx': tx.uintCV(1843686) }),
    tx.tupleCV({ 'to': tx.uintCV(1515), 'ustx': tx.uintCV(3723119) }),
    tx.tupleCV({ 'to': tx.uintCV(1518), 'ustx': tx.uintCV(16877080) }),
    tx.tupleCV({ 'to': tx.uintCV(1521), 'ustx': tx.uintCV(4331072) }),
    tx.tupleCV({ 'to': tx.uintCV(1522), 'ustx': tx.uintCV(117989) }),
    tx.tupleCV({ 'to': tx.uintCV(1531), 'ustx': tx.uintCV(110114920) }),
    tx.tupleCV({ 'to': tx.uintCV(1533), 'ustx': tx.uintCV(1958612) }),
    tx.tupleCV({ 'to': tx.uintCV(1534), 'ustx': tx.uintCV(7777306) }),
    tx.tupleCV({ 'to': tx.uintCV(1536), 'ustx': tx.uintCV(1179887) }),
    tx.tupleCV({ 'to': tx.uintCV(1537), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1538), 'ustx': tx.uintCV(3811035) }),
    tx.tupleCV({ 'to': tx.uintCV(1541), 'ustx': tx.uintCV(3615849) }),
    tx.tupleCV({ 'to': tx.uintCV(1543), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1547), 'ustx': tx.uintCV(1573183) }),
    tx.tupleCV({ 'to': tx.uintCV(1548), 'ustx': tx.uintCV(62927) }),
    tx.tupleCV({ 'to': tx.uintCV(1553), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1554), 'ustx': tx.uintCV(397346) }),
    tx.tupleCV({ 'to': tx.uintCV(1555), 'ustx': tx.uintCV(78568234) }),
    tx.tupleCV({ 'to': tx.uintCV(1556), 'ustx': tx.uintCV(18152309) }),
    tx.tupleCV({ 'to': tx.uintCV(1561), 'ustx': tx.uintCV(12192166) }),
    tx.tupleCV({ 'to': tx.uintCV(1562), 'ustx': tx.uintCV(27531) }),
    tx.tupleCV({ 'to': tx.uintCV(1566), 'ustx': tx.uintCV(14420657) }),
    tx.tupleCV({ 'to': tx.uintCV(1567), 'ustx': tx.uintCV(27531) }),
    tx.tupleCV({ 'to': tx.uintCV(1569), 'ustx': tx.uintCV(2639014) }),
    tx.tupleCV({ 'to': tx.uintCV(1570), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1574), 'ustx': tx.uintCV(157318) }),
    tx.tupleCV({ 'to': tx.uintCV(1576), 'ustx': tx.uintCV(117989) }),
    tx.tupleCV({ 'to': tx.uintCV(1581), 'ustx': tx.uintCV(8733512) }),
    tx.tupleCV({ 'to': tx.uintCV(1582), 'ustx': tx.uintCV(914422) }),
    tx.tupleCV({ 'to': tx.uintCV(1584), 'ustx': tx.uintCV(255642) }),
    tx.tupleCV({ 'to': tx.uintCV(1587), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1589), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1591), 'ustx': tx.uintCV(3580958) }),
    tx.tupleCV({ 'to': tx.uintCV(1593), 'ustx': tx.uintCV(5960190) }),
    tx.tupleCV({ 'to': tx.uintCV(1594), 'ustx': tx.uintCV(1671507) }),
    tx.tupleCV({ 'to': tx.uintCV(1598), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1599), 'ustx': tx.uintCV(66860) }),
    tx.tupleCV({ 'to': tx.uintCV(1600), 'ustx': tx.uintCV(13807774) }),
    tx.tupleCV({ 'to': tx.uintCV(1601), 'ustx': tx.uintCV(302838) }),
    tx.tupleCV({ 'to': tx.uintCV(1602), 'ustx': tx.uintCV(98324) }),
    tx.tupleCV({ 'to': tx.uintCV(1603), 'ustx': tx.uintCV(98324) }),
    tx.tupleCV({ 'to': tx.uintCV(1604), 'ustx': tx.uintCV(1573183) }),
    tx.tupleCV({ 'to': tx.uintCV(1605), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1609), 'ustx': tx.uintCV(393296) })
  ]);
  const txOptions = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: 'arkadiko-claim-yield-v2-1',
    functionName: 'add-claims',
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    fee: new BN(100000, 10),
    nonce: new BN(532, 10),
    postConditionMode: 1,
    network
  };

  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
