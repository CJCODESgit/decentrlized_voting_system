async function main() {
  const Voting = await ethers.getContractFactory("Voting");
  console.log("deploying contract ...")

  // Start deployment, returning a promise that resolves to a contract object
  const Votingdata = await Voting.deploy(["Anjali","John","David","Ayush"]);
  //await Voting.deployed();
  
  console.log("Contract address:", Votingdata.address);
  const candidates = await Votingdata.getallcandidates();
  console.log(candidates)


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });