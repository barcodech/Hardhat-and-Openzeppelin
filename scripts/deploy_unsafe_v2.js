const { ethers, upgrades } = require("hardhat");
 
const PROXY = "0x57523F855A34454127aF0Fx100de91A479E22xxx";
 
async function main() {
    const UnsafeV2 = await ethers.getContractFactory("UnsafeV2");
    console.log("Upgrading Unsafe V2...");
    await upgrades.upgradeProxy(PROXY, UnsafeV2, {
        constructorArgs: [456],
    });
    console.log("Unsafe V2 upgraded");
}
 
main();