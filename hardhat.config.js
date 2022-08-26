/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');

const INFURA_URL = 'https://rinkeby.infura.io/v3/25be82a778d642fbaf4f0bd2exxxxxx';
const PRIVATE_KEY = 'd22b98748f80e2d53b4441e25e2088b4a60b7ad37bac696a094dceebxxxxxx';

module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
