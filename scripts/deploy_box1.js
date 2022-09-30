const { ethers, upgrades } = require("hardhat");
 
async function main() {
    const Box = await ethers.getContractFactory("BoxV1");
    console.log("Deploying Box...");
    const box = await upgrades.deployProxy(Box, [99], {
        initializer: "initialize",
    });
    await box.deployed();
    console.log("Box deployed to:", box.address);
}
 
main();