async function main(){
 
    const MyContract = await hre.ethers.getContractFactory("MyContract");
 
    const myContractDeployed = await MyContract.deploy("Happyape","HPA");
 
    await myContractDeployed.deployed();
 
    console.log("Deploy MyContract to:",myContractDeployed.address);
}
 
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });