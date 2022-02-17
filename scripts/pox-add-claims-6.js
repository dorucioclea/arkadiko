
// node proposal-emergency-shutdown.js
require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(1610), 'ustx': tx.uintCV(4225169) }),
    tx.tupleCV({ 'to': tx.uintCV(1612), 'ustx': tx.uintCV(363236) }),
    tx.tupleCV({ 'to': tx.uintCV(1613), 'ustx': tx.uintCV(2753070) }),
    tx.tupleCV({ 'to': tx.uintCV(1617), 'ustx': tx.uintCV(70793) }),
    tx.tupleCV({ 'to': tx.uintCV(1618), 'ustx': tx.uintCV(7350901) }),
    tx.tupleCV({ 'to': tx.uintCV(1619), 'ustx': tx.uintCV(9901913) }),
    tx.tupleCV({ 'to': tx.uintCV(1622), 'ustx': tx.uintCV(23840761) }),
    tx.tupleCV({ 'to': tx.uintCV(1719), 'ustx': tx.uintCV(14316220) }),
    tx.tupleCV({ 'to': tx.uintCV(1725), 'ustx': tx.uintCV(108745) }),
    tx.tupleCV({ 'to': tx.uintCV(1726), 'ustx': tx.uintCV(475309) }),
    tx.tupleCV({ 'to': tx.uintCV(1733), 'ustx': tx.uintCV(396091) }),
    tx.tupleCV({ 'to': tx.uintCV(1734), 'ustx': tx.uintCV(39456518) }),
    tx.tupleCV({ 'to': tx.uintCV(1735), 'ustx': tx.uintCV(110123) }),
    tx.tupleCV({ 'to': tx.uintCV(1736), 'ustx': tx.uintCV(12585461) }),
    tx.tupleCV({ 'to': tx.uintCV(1737), 'ustx': tx.uintCV(161251) }),
    tx.tupleCV({ 'to': tx.uintCV(1738), 'ustx': tx.uintCV(47195) }),
    tx.tupleCV({ 'to': tx.uintCV(1739), 'ustx': tx.uintCV(2017483) }),
    tx.tupleCV({ 'to': tx.uintCV(1740), 'ustx': tx.uintCV(842922) }),
    tx.tupleCV({ 'to': tx.uintCV(1741), 'ustx': tx.uintCV(165184) }),
    tx.tupleCV({ 'to': tx.uintCV(1744), 'ustx': tx.uintCV(1179887) }),
    tx.tupleCV({ 'to': tx.uintCV(1748), 'ustx': tx.uintCV(19665) }),
    tx.tupleCV({ 'to': tx.uintCV(1749), 'ustx': tx.uintCV(98324) }),
    tx.tupleCV({ 'to': tx.uintCV(1750), 'ustx': tx.uintCV(39952705) }),
    tx.tupleCV({ 'to': tx.uintCV(1751), 'ustx': tx.uintCV(7866) }),
    tx.tupleCV({ 'to': tx.uintCV(1752), 'ustx': tx.uintCV(688267) }),
    tx.tupleCV({ 'to': tx.uintCV(1753), 'ustx': tx.uintCV(5508267) }),
    tx.tupleCV({ 'to': tx.uintCV(1754), 'ustx': tx.uintCV(197282589) }),
    tx.tupleCV({ 'to': tx.uintCV(1755), 'ustx': tx.uintCV(6292731) }),
    tx.tupleCV({ 'to': tx.uintCV(1756), 'ustx': tx.uintCV(197282589) }),
    tx.tupleCV({ 'to': tx.uintCV(1757), 'ustx': tx.uintCV(39456518) }),
    tx.tupleCV({ 'to': tx.uintCV(1758), 'ustx': tx.uintCV(19728259) }),
    tx.tupleCV({ 'to': tx.uintCV(1759), 'ustx': tx.uintCV(1529920) }),
    tx.tupleCV({ 'to': tx.uintCV(1760), 'ustx': tx.uintCV(27137401) }),
    tx.tupleCV({ 'to': tx.uintCV(1766), 'ustx': tx.uintCV(589943) }),
    tx.tupleCV({ 'to': tx.uintCV(1767), 'ustx': tx.uintCV(668603) }),
    tx.tupleCV({ 'to': tx.uintCV(1768), 'ustx': tx.uintCV(39330) }),
    tx.tupleCV({ 'to': tx.uintCV(1769), 'ustx': tx.uintCV(12405129) }),
    tx.tupleCV({ 'to': tx.uintCV(1770), 'ustx': tx.uintCV(7891304) }),
    tx.tupleCV({ 'to': tx.uintCV(1771), 'ustx': tx.uintCV(1718702) }),
    tx.tupleCV({ 'to': tx.uintCV(1775), 'ustx': tx.uintCV(1179887) }),
    tx.tupleCV({ 'to': tx.uintCV(1776), 'ustx': tx.uintCV(39456518) }),
    tx.tupleCV({ 'to': tx.uintCV(1777), 'ustx': tx.uintCV(176983) }),
    tx.tupleCV({ 'to': tx.uintCV(1778), 'ustx': tx.uintCV(51128) }),
    tx.tupleCV({ 'to': tx.uintCV(1783), 'ustx': tx.uintCV(121922) }),
    tx.tupleCV({ 'to': tx.uintCV(1784), 'ustx': tx.uintCV(275306966) }),
    tx.tupleCV({ 'to': tx.uintCV(1785), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1787), 'ustx': tx.uintCV(39330) }),
    tx.tupleCV({ 'to': tx.uintCV(1789), 'ustx': tx.uintCV(2635081) }),
    tx.tupleCV({ 'to': tx.uintCV(1790), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1791), 'ustx': tx.uintCV(9071191) }),
    tx.tupleCV({ 'to': tx.uintCV(1792), 'ustx': tx.uintCV(157318) }),
    tx.tupleCV({ 'to': tx.uintCV(1793), 'ustx': tx.uintCV(2141435) }),
    tx.tupleCV({ 'to': tx.uintCV(1794), 'ustx': tx.uintCV(59184777) }),
    tx.tupleCV({ 'to': tx.uintCV(1795), 'ustx': tx.uintCV(59184777) }),
    tx.tupleCV({ 'to': tx.uintCV(1796), 'ustx': tx.uintCV(70793) }),
    tx.tupleCV({ 'to': tx.uintCV(1797), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1798), 'ustx': tx.uintCV(865250) }),
    tx.tupleCV({ 'to': tx.uintCV(1800), 'ustx': tx.uintCV(9714403) }),
    tx.tupleCV({ 'to': tx.uintCV(1801), 'ustx': tx.uintCV(9714403) }),
    tx.tupleCV({ 'to': tx.uintCV(1802), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1803), 'ustx': tx.uintCV(11189262) }),
    tx.tupleCV({ 'to': tx.uintCV(1804), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1805), 'ustx': tx.uintCV(2949717) }),
    tx.tupleCV({ 'to': tx.uintCV(1808), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1809), 'ustx': tx.uintCV(9832392) }),
    tx.tupleCV({ 'to': tx.uintCV(1811), 'ustx': tx.uintCV(78659) }),
    tx.tupleCV({ 'to': tx.uintCV(1812), 'ustx': tx.uintCV(900647) }),
    tx.tupleCV({ 'to': tx.uintCV(1813), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1814), 'ustx': tx.uintCV(55061) }),
    tx.tupleCV({ 'to': tx.uintCV(1815), 'ustx': tx.uintCV(117989) }),
    tx.tupleCV({ 'to': tx.uintCV(1816), 'ustx': tx.uintCV(7865913) }),
    tx.tupleCV({ 'to': tx.uintCV(1818), 'ustx': tx.uintCV(96278779) }),
    tx.tupleCV({ 'to': tx.uintCV(1824), 'ustx': tx.uintCV(5710653) }),
    tx.tupleCV({ 'to': tx.uintCV(1825), 'ustx': tx.uintCV(5506139) }),
    tx.tupleCV({ 'to': tx.uintCV(1826), 'ustx': tx.uintCV(251709) }),
    tx.tupleCV({ 'to': tx.uintCV(1827), 'ustx': tx.uintCV(55061) }),
    tx.tupleCV({ 'to': tx.uintCV(1828), 'ustx': tx.uintCV(4188599) }),
    tx.tupleCV({ 'to': tx.uintCV(1829), 'ustx': tx.uintCV(904580) }),
    tx.tupleCV({ 'to': tx.uintCV(1835), 'ustx': tx.uintCV(1773763) }),
    tx.tupleCV({ 'to': tx.uintCV(1836), 'ustx': tx.uintCV(98324) }),
    tx.tupleCV({ 'to': tx.uintCV(1837), 'ustx': tx.uintCV(19665) }),
    tx.tupleCV({ 'to': tx.uintCV(1838), 'ustx': tx.uintCV(263508) }),
    tx.tupleCV({ 'to': tx.uintCV(1840), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1843), 'ustx': tx.uintCV(19665) }),
    tx.tupleCV({ 'to': tx.uintCV(1844), 'ustx': tx.uintCV(7594539) }),
    tx.tupleCV({ 'to': tx.uintCV(1845), 'ustx': tx.uintCV(1447328) }),
    tx.tupleCV({ 'to': tx.uintCV(1846), 'ustx': tx.uintCV(7866) }),
    tx.tupleCV({ 'to': tx.uintCV(1847), 'ustx': tx.uintCV(78659) }),
    tx.tupleCV({ 'to': tx.uintCV(1848), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1849), 'ustx': tx.uintCV(58994) }),
    tx.tupleCV({ 'to': tx.uintCV(1850), 'ustx': tx.uintCV(1966478) }),
    tx.tupleCV({ 'to': tx.uintCV(1852), 'ustx': tx.uintCV(10799899) }),
    tx.tupleCV({ 'to': tx.uintCV(1853), 'ustx': tx.uintCV(15731827) }),
    tx.tupleCV({ 'to': tx.uintCV(1854), 'ustx': tx.uintCV(235977) }),
    tx.tupleCV({ 'to': tx.uintCV(1855), 'ustx': tx.uintCV(196648) }),
    tx.tupleCV({ 'to': tx.uintCV(1856), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1857), 'ustx': tx.uintCV(78659133) }),
    tx.tupleCV({ 'to': tx.uintCV(1858), 'ustx': tx.uintCV(1179887) }),
    tx.tupleCV({ 'to': tx.uintCV(1859), 'ustx': tx.uintCV(39330) }),
    tx.tupleCV({ 'to': tx.uintCV(1862), 'ustx': tx.uintCV(4896531) }),
    tx.tupleCV({ 'to': tx.uintCV(1863), 'ustx': tx.uintCV(3932957) }),
    tx.tupleCV({ 'to': tx.uintCV(1864), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1867), 'ustx': tx.uintCV(865250) }),
    tx.tupleCV({ 'to': tx.uintCV(1868), 'ustx': tx.uintCV(7885578) }),
    tx.tupleCV({ 'to': tx.uintCV(1869), 'ustx': tx.uintCV(15141883) }),
    tx.tupleCV({ 'to': tx.uintCV(1870), 'ustx': tx.uintCV(4916196) }),
    tx.tupleCV({ 'to': tx.uintCV(1871), 'ustx': tx.uintCV(1868154) }),
    tx.tupleCV({ 'to': tx.uintCV(1872), 'ustx': tx.uintCV(39330) }),
    tx.tupleCV({ 'to': tx.uintCV(1873), 'ustx': tx.uintCV(786591) }),
    tx.tupleCV({ 'to': tx.uintCV(1874), 'ustx': tx.uintCV(1415864) }),
    tx.tupleCV({ 'to': tx.uintCV(1875), 'ustx': tx.uintCV(3991951) }),
    tx.tupleCV({ 'to': tx.uintCV(1877), 'ustx': tx.uintCV(1376535) }),
    tx.tupleCV({ 'to': tx.uintCV(1878), 'ustx': tx.uintCV(6233736) }),
    tx.tupleCV({ 'to': tx.uintCV(1879), 'ustx': tx.uintCV(298905) }),
    tx.tupleCV({ 'to': tx.uintCV(1881), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1883), 'ustx': tx.uintCV(19664783) }),
    tx.tupleCV({ 'to': tx.uintCV(1885), 'ustx': tx.uintCV(255642) }),
    tx.tupleCV({ 'to': tx.uintCV(1886), 'ustx': tx.uintCV(393296) }),
    tx.tupleCV({ 'to': tx.uintCV(1887), 'ustx': tx.uintCV(110123) }),
    tx.tupleCV({ 'to': tx.uintCV(1888), 'ustx': tx.uintCV(294972) }),
    tx.tupleCV({ 'to': tx.uintCV(1890), 'ustx': tx.uintCV(2583953) }),
    tx.tupleCV({ 'to': tx.uintCV(1891), 'ustx': tx.uintCV(381103500) }),
    tx.tupleCV({ 'to': tx.uintCV(1892), 'ustx': tx.uintCV(1954679) }),
    tx.tupleCV({ 'to': tx.uintCV(1893), 'ustx': tx.uintCV(11791004) }),
    tx.tupleCV({ 'to': tx.uintCV(1894), 'ustx': tx.uintCV(998971) }),
    tx.tupleCV({ 'to': tx.uintCV(1895), 'ustx': tx.uintCV(117989) })
  ]);
  const txOptions = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: 'arkadiko-claim-yield-v2-1',
    functionName: 'add-claims',
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    fee: new BN(100000, 10),
    nonce: new BN(533, 10),
    postConditionMode: 1,
    network
  };

  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
