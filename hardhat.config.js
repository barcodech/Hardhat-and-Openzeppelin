/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
};

require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

const INFURA_URL = 'https://rinkeby.infura.io/v3/66497ef7881a40a2a0a54f71be8005af';
const PRIVATE_KEY = 'd22b98748f80e2d53b4441e25e2088b4a60b7ad37bac696a094dceebfb7bd56f';
const ETHERSCAN_API_KEY = 'XME28URXRXMYUTHPSQSQVCSFPV8HJS54QN';
 
module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
