const { ethers, upgrades } = require("hardhat");

async function main() {
    const UnsafeV1 = await ethers.getContractFactory("UnsafeV1");
    console.log("Deploying Unsafe V1...");
    const contract = await upgrades.deployProxy(UnsafeV1, [99], {
        constructorArgs: [222],
        initializer: "initialize",
    });
    await contract.deployed();
    console.log("Unsafe V1 deployed to:", contract.address);
}

main();