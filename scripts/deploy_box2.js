const { ethers, upgrades } = require("hardhat");
 
const PROXY = "0xC9a57ae7c423343EB7A0b983B1d09580xxxxxxE";
 
async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
   
}
 
main();