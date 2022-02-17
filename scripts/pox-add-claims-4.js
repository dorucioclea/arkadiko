
// node proposal-emergency-shutdown.js
require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(878), 'ustx': tx.uintCV(6780417) }),
    tx.tupleCV({ 'to': tx.uintCV(879), 'ustx': tx.uintCV(19665) }),
    tx.tupleCV({ 'to': tx.uintCV(880), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(881), 'ustx': tx.uintCV(27531) }),
    tx.tupleCV({ 'to': tx.uintCV(882), 'ustx': tx.uintCV(15732) }),
    tx.tupleCV({ 'to': tx.uintCV(883), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(884), 'ustx': tx.uintCV(314967753) }),
    tx.tupleCV({ 'to': tx.uintCV(886), 'ustx': tx.uintCV(31464) }),
    tx.tupleCV({ 'to': tx.uintCV(888), 'ustx': tx.uintCV(176983) }),
    tx.tupleCV({ 'to': tx.uintCV(890), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(891), 'ustx': tx.uintCV(1865838) }),
    tx.tupleCV({ 'to': tx.uintCV(892), 'ustx': tx.uintCV(7866) }),
    tx.tupleCV({ 'to': tx.uintCV(893), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(895), 'ustx': tx.uintCV(1026502) }),
    tx.tupleCV({ 'to': tx.uintCV(896), 'ustx': tx.uintCV(1462483) }),
    tx.tupleCV({ 'to': tx.uintCV(897), 'ustx': tx.uintCV(4768127) }),
    tx.tupleCV({ 'to': tx.uintCV(898), 'ustx': tx.uintCV(1746233) }),
    tx.tupleCV({ 'to': tx.uintCV(899), 'ustx': tx.uintCV(19665) }),
    tx.tupleCV({ 'to': tx.uintCV(900), 'ustx': tx.uintCV(11960499) }),
    tx.tupleCV({ 'to': tx.uintCV(902), 'ustx': tx.uintCV(18762750) }),
    tx.tupleCV({ 'to': tx.uintCV(903), 'ustx': tx.uintCV(8133354) }),
    tx.tupleCV({ 'to': tx.uintCV(904), 'ustx': tx.uintCV(416893) }),
    tx.tupleCV({ 'to': tx.uintCV(905), 'ustx': tx.uintCV(31464) }),
    tx.tupleCV({ 'to': tx.uintCV(906), 'ustx': tx.uintCV(7079322) }),
    tx.tupleCV({ 'to': tx.uintCV(907), 'ustx': tx.uintCV(1573183) }),
    tx.tupleCV({ 'to': tx.uintCV(909), 'ustx': tx.uintCV(357899) }),
    tx.tupleCV({ 'to': tx.uintCV(911), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(912), 'ustx': tx.uintCV(7973666) }),
    tx.tupleCV({ 'to': tx.uintCV(914), 'ustx': tx.uintCV(90458) }),
    tx.tupleCV({ 'to': tx.uintCV(915), 'ustx': tx.uintCV(7866) }),
    tx.tupleCV({ 'to': tx.uintCV(919), 'ustx': tx.uintCV(188782) }),
    tx.tupleCV({ 'to': tx.uintCV(920), 'ustx': tx.uintCV(7275970) }),
    tx.tupleCV({ 'to': tx.uintCV(921), 'ustx': tx.uintCV(5563793) }),
    tx.tupleCV({ 'to': tx.uintCV(922), 'ustx': tx.uintCV(27531) }),
    tx.tupleCV({ 'to': tx.uintCV(924), 'ustx': tx.uintCV(1179887) }),
    tx.tupleCV({ 'to': tx.uintCV(925), 'ustx': tx.uintCV(825921) }),
    tx.tupleCV({ 'to': tx.uintCV(926), 'ustx': tx.uintCV(8652505) }),
    tx.tupleCV({ 'to': tx.uintCV(928), 'ustx': tx.uintCV(3960908) }),
    tx.tupleCV({ 'to': tx.uintCV(933), 'ustx': tx.uintCV(1093362) }),
    tx.tupleCV({ 'to': tx.uintCV(934), 'ustx': tx.uintCV(876265) }),
    tx.tupleCV({ 'to': tx.uintCV(935), 'ustx': tx.uintCV(178058) }),
    tx.tupleCV({ 'to': tx.uintCV(937), 'ustx': tx.uintCV(13953916) }),
    tx.tupleCV({ 'to': tx.uintCV(939), 'ustx': tx.uintCV(589943) }),
    tx.tupleCV({ 'to': tx.uintCV(940), 'ustx': tx.uintCV(3978859) }),
    tx.tupleCV({ 'to': tx.uintCV(942), 'ustx': tx.uintCV(3308114) }),
    tx.tupleCV({ 'to': tx.uintCV(943), 'ustx': tx.uintCV(188782) }),
    tx.tupleCV({ 'to': tx.uintCV(944), 'ustx': tx.uintCV(2556422) }),
    tx.tupleCV({ 'to': tx.uintCV(945), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(946), 'ustx': tx.uintCV(3543203) }),
    tx.tupleCV({ 'to': tx.uintCV(947), 'ustx': tx.uintCV(145519) }),
    tx.tupleCV({ 'to': tx.uintCV(948), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(951), 'ustx': tx.uintCV(9303372) }),
    tx.tupleCV({ 'to': tx.uintCV(952), 'ustx': tx.uintCV(1551431) }),
    tx.tupleCV({ 'to': tx.uintCV(953), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(954), 'ustx': tx.uintCV(3974193) }),
    tx.tupleCV({ 'to': tx.uintCV(955), 'ustx': tx.uintCV(39329567) }),
    tx.tupleCV({ 'to': tx.uintCV(956), 'ustx': tx.uintCV(20982324) }),
    tx.tupleCV({ 'to': tx.uintCV(958), 'ustx': tx.uintCV(8849152) }),
    tx.tupleCV({ 'to': tx.uintCV(959), 'ustx': tx.uintCV(31894664) }),
    tx.tupleCV({ 'to': tx.uintCV(960), 'ustx': tx.uintCV(23753291) }),
    tx.tupleCV({ 'to': tx.uintCV(962), 'ustx': tx.uintCV(1140557) }),
    tx.tupleCV({ 'to': tx.uintCV(963), 'ustx': tx.uintCV(167373977) }),
    tx.tupleCV({ 'to': tx.uintCV(964), 'ustx': tx.uintCV(11794937) }),
    tx.tupleCV({ 'to': tx.uintCV(965), 'ustx': tx.uintCV(2753070) }),
    tx.tupleCV({ 'to': tx.uintCV(966), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(967), 'ustx': tx.uintCV(31894664) }),
    tx.tupleCV({ 'to': tx.uintCV(968), 'ustx': tx.uintCV(19870689) }),
    tx.tupleCV({ 'to': tx.uintCV(969), 'ustx': tx.uintCV(7973666) }),
    tx.tupleCV({ 'to': tx.uintCV(970), 'ustx': tx.uintCV(794457) }),
    tx.tupleCV({ 'to': tx.uintCV(972), 'ustx': tx.uintCV(1864221) }),
    tx.tupleCV({ 'to': tx.uintCV(977), 'ustx': tx.uintCV(29901248) }),
    tx.tupleCV({ 'to': tx.uintCV(978), 'ustx': tx.uintCV(3425605) }),
    tx.tupleCV({ 'to': tx.uintCV(979), 'ustx': tx.uintCV(440491) }),
    tx.tupleCV({ 'to': tx.uintCV(981), 'ustx': tx.uintCV(117989) }),
    tx.tupleCV({ 'to': tx.uintCV(982), 'ustx': tx.uintCV(829854) }),
    tx.tupleCV({ 'to': tx.uintCV(985), 'ustx': tx.uintCV(2045137) }),
    tx.tupleCV({ 'to': tx.uintCV(987), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(988), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(989), 'ustx': tx.uintCV(279240) }),
    tx.tupleCV({ 'to': tx.uintCV(991), 'ustx': tx.uintCV(2392100) }),
    tx.tupleCV({ 'to': tx.uintCV(992), 'ustx': tx.uintCV(60680766) }),
    tx.tupleCV({ 'to': tx.uintCV(993), 'ustx': tx.uintCV(4125672) }),
    tx.tupleCV({ 'to': tx.uintCV(995), 'ustx': tx.uintCV(2365791) }),
    tx.tupleCV({ 'to': tx.uintCV(996), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(997), 'ustx': tx.uintCV(61742035) }),
    tx.tupleCV({ 'to': tx.uintCV(999), 'ustx': tx.uintCV(72094617) }),
    tx.tupleCV({ 'to': tx.uintCV(1000), 'ustx': tx.uintCV(31463653) }),
    tx.tupleCV({ 'to': tx.uintCV(1001), 'ustx': tx.uintCV(2938188) }),
    tx.tupleCV({ 'to': tx.uintCV(1003), 'ustx': tx.uintCV(1769830) }),
    tx.tupleCV({ 'to': tx.uintCV(1008), 'ustx': tx.uintCV(880982) }),
    tx.tupleCV({ 'to': tx.uintCV(1016), 'ustx': tx.uintCV(2519603) }),
    tx.tupleCV({ 'to': tx.uintCV(1017), 'ustx': tx.uintCV(39329567) }),
    tx.tupleCV({ 'to': tx.uintCV(1020), 'ustx': tx.uintCV(3146365) }),
    tx.tupleCV({ 'to': tx.uintCV(1022), 'ustx': tx.uintCV(3986833) }),
    tx.tupleCV({ 'to': tx.uintCV(1023), 'ustx': tx.uintCV(2949717) }),
    tx.tupleCV({ 'to': tx.uintCV(1024), 'ustx': tx.uintCV(7973666) }),
    tx.tupleCV({ 'to': tx.uintCV(1026), 'ustx': tx.uintCV(11114303) }),
    tx.tupleCV({ 'to': tx.uintCV(1027), 'ustx': tx.uintCV(39868330) }),
    tx.tupleCV({ 'to': tx.uintCV(1033), 'ustx': tx.uintCV(7045434) }),
    tx.tupleCV({ 'to': tx.uintCV(1034), 'ustx': tx.uintCV(90458) }),
    tx.tupleCV({ 'to': tx.uintCV(1036), 'ustx': tx.uintCV(78659) }),
    tx.tupleCV({ 'to': tx.uintCV(1039), 'ustx': tx.uintCV(499485) }),
    tx.tupleCV({ 'to': tx.uintCV(1041), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1042), 'ustx': tx.uintCV(3213226) }),
    tx.tupleCV({ 'to': tx.uintCV(1045), 'ustx': tx.uintCV(45313120) }),
    tx.tupleCV({ 'to': tx.uintCV(1047), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1048), 'ustx': tx.uintCV(3552427) }),
    tx.tupleCV({ 'to': tx.uintCV(1049), 'ustx': tx.uintCV(4909749) }),
    tx.tupleCV({ 'to': tx.uintCV(1050), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1053), 'ustx': tx.uintCV(13765348) }),
    tx.tupleCV({ 'to': tx.uintCV(1054), 'ustx': tx.uintCV(7865913) }),
    tx.tupleCV({ 'to': tx.uintCV(1056), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1057), 'ustx': tx.uintCV(983239) }),
    tx.tupleCV({ 'to': tx.uintCV(1060), 'ustx': tx.uintCV(2359774) }),
    tx.tupleCV({ 'to': tx.uintCV(1062), 'ustx': tx.uintCV(10717307) }),
    tx.tupleCV({ 'to': tx.uintCV(1063), 'ustx': tx.uintCV(11960499) }),
    tx.tupleCV({ 'to': tx.uintCV(1065), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1067), 'ustx': tx.uintCV(538815) }),
    tx.tupleCV({ 'to': tx.uintCV(1069), 'ustx': tx.uintCV(4784320) }),
    tx.tupleCV({ 'to': tx.uintCV(1071), 'ustx': tx.uintCV(10717307) }),
    tx.tupleCV({ 'to': tx.uintCV(1072), 'ustx': tx.uintCV(4172845) }),
    tx.tupleCV({ 'to': tx.uintCV(1073), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1074), 'ustx': tx.uintCV(117989) }),
    tx.tupleCV({ 'to': tx.uintCV(1075), 'ustx': tx.uintCV(29497175) }),
    tx.tupleCV({ 'to': tx.uintCV(1077), 'ustx': tx.uintCV(31464) }),
    tx.tupleCV({ 'to': tx.uintCV(1078), 'ustx': tx.uintCV(96400701) }),
    tx.tupleCV({ 'to': tx.uintCV(1080), 'ustx': tx.uintCV(25268842) }),
    tx.tupleCV({ 'to': tx.uintCV(1081), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1082), 'ustx': tx.uintCV(50204192) }),
    tx.tupleCV({ 'to': tx.uintCV(1084), 'ustx': tx.uintCV(157318) }),
    tx.tupleCV({ 'to': tx.uintCV(1085), 'ustx': tx.uintCV(2359774) }),
    tx.tupleCV({ 'to': tx.uintCV(1086), 'ustx': tx.uintCV(8455857) }),
    tx.tupleCV({ 'to': tx.uintCV(1087), 'ustx': tx.uintCV(10438067) }),
    tx.tupleCV({ 'to': tx.uintCV(1089), 'ustx': tx.uintCV(1376535) }),
    tx.tupleCV({ 'to': tx.uintCV(1090), 'ustx': tx.uintCV(12683785) }),
    tx.tupleCV({ 'to': tx.uintCV(1091), 'ustx': tx.uintCV(18782339) }),
    tx.tupleCV({ 'to': tx.uintCV(1092), 'ustx': tx.uintCV(7542276) }),
    tx.tupleCV({ 'to': tx.uintCV(1093), 'ustx': tx.uintCV(137653) }),
    tx.tupleCV({ 'to': tx.uintCV(1094), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1095), 'ustx': tx.uintCV(3917225) }),
    tx.tupleCV({ 'to': tx.uintCV(1097), 'ustx': tx.uintCV(6992797) }),
    tx.tupleCV({ 'to': tx.uintCV(1099), 'ustx': tx.uintCV(9948040) }),
    tx.tupleCV({ 'to': tx.uintCV(1102), 'ustx': tx.uintCV(2359774) }),
    tx.tupleCV({ 'to': tx.uintCV(1103), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1106), 'ustx': tx.uintCV(1987069) }),
    tx.tupleCV({ 'to': tx.uintCV(1107), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1112), 'ustx': tx.uintCV(392553) }),
    tx.tupleCV({ 'to': tx.uintCV(1113), 'ustx': tx.uintCV(86872923) }),
    tx.tupleCV({ 'to': tx.uintCV(1114), 'ustx': tx.uintCV(314637) }),
    tx.tupleCV({ 'to': tx.uintCV(1116), 'ustx': tx.uintCV(2729472) }),
    tx.tupleCV({ 'to': tx.uintCV(1120), 'ustx': tx.uintCV(192715) }),
    tx.tupleCV({ 'to': tx.uintCV(1121), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1122), 'ustx': tx.uintCV(18091601) }),
    tx.tupleCV({ 'to': tx.uintCV(1123), 'ustx': tx.uintCV(1323388) }),
    tx.tupleCV({ 'to': tx.uintCV(1124), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1125), 'ustx': tx.uintCV(2185776) }),
    tx.tupleCV({ 'to': tx.uintCV(1126), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1128), 'ustx': tx.uintCV(7973666) }),
    tx.tupleCV({ 'to': tx.uintCV(1130), 'ustx': tx.uintCV(1179887) }),
    tx.tupleCV({ 'to': tx.uintCV(1131), 'ustx': tx.uintCV(1179887) }),
    tx.tupleCV({ 'to': tx.uintCV(1133), 'ustx': tx.uintCV(19656917) }),
    tx.tupleCV({ 'to': tx.uintCV(1134), 'ustx': tx.uintCV(15732) }),
    tx.tupleCV({ 'to': tx.uintCV(1135), 'ustx': tx.uintCV(58994) }),
    tx.tupleCV({ 'to': tx.uintCV(1137), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1138), 'ustx': tx.uintCV(21900643) }),
    tx.tupleCV({ 'to': tx.uintCV(1139), 'ustx': tx.uintCV(31369193) }),
    tx.tupleCV({ 'to': tx.uintCV(1140), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1141), 'ustx': tx.uintCV(1573183) }),
    tx.tupleCV({ 'to': tx.uintCV(1146), 'ustx': tx.uintCV(39868880) }),
    tx.tupleCV({ 'to': tx.uintCV(1151), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1152), 'ustx': tx.uintCV(4570322) }),
    tx.tupleCV({ 'to': tx.uintCV(1155), 'ustx': tx.uintCV(7973666) }),
    tx.tupleCV({ 'to': tx.uintCV(1157), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1158), 'ustx': tx.uintCV(12224374) }),
    tx.tupleCV({ 'to': tx.uintCV(1161), 'ustx': tx.uintCV(3935328) }),
    tx.tupleCV({ 'to': tx.uintCV(1162), 'ustx': tx.uintCV(20467106) }),
    tx.tupleCV({ 'to': tx.uintCV(1164), 'ustx': tx.uintCV(24531779) }),
    tx.tupleCV({ 'to': tx.uintCV(1165), 'ustx': tx.uintCV(31464) }),
    tx.tupleCV({ 'to': tx.uintCV(1167), 'ustx': tx.uintCV(1573183) }),
    tx.tupleCV({ 'to': tx.uintCV(1168), 'ustx': tx.uintCV(29497175) }),
    tx.tupleCV({ 'to': tx.uintCV(1169), 'ustx': tx.uintCV(3974138) }),
    tx.tupleCV({ 'to': tx.uintCV(1172), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1174), 'ustx': tx.uintCV(10697642) }),
    tx.tupleCV({ 'to': tx.uintCV(1176), 'ustx': tx.uintCV(491620) }),
    tx.tupleCV({ 'to': tx.uintCV(1178), 'ustx': tx.uintCV(14090089) }),
    tx.tupleCV({ 'to': tx.uintCV(1179), 'ustx': tx.uintCV(79738672) }),
    tx.tupleCV({ 'to': tx.uintCV(1180), 'ustx': tx.uintCV(4129129) }),
    tx.tupleCV({ 'to': tx.uintCV(1182), 'ustx': tx.uintCV(5325345) }),
    tx.tupleCV({ 'to': tx.uintCV(1185), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1186), 'ustx': tx.uintCV(39869336) }),
    tx.tupleCV({ 'to': tx.uintCV(1187), 'ustx': tx.uintCV(33430132) }),
    tx.tupleCV({ 'to': tx.uintCV(1188), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1189), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1190), 'ustx': tx.uintCV(865250) }),
    tx.tupleCV({ 'to': tx.uintCV(1191), 'ustx': tx.uintCV(1929676) }),
    tx.tupleCV({ 'to': tx.uintCV(1192), 'ustx': tx.uintCV(4719548) }),
    tx.tupleCV({ 'to': tx.uintCV(1195), 'ustx': tx.uintCV(5899435) }),
    tx.tupleCV({ 'to': tx.uintCV(1198), 'ustx': tx.uintCV(3588150) })
  ]);
  const txOptions = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: 'arkadiko-claim-yield-v2-1',
    functionName: 'add-claims',
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    fee: new BN(100000, 10),
    nonce: new BN(531, 10),
    postConditionMode: 1,
    network
  };

  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
