var Web3 = require('web3')
var web31 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web31.eth.accounts

solc = require('solc')
code = fs.readFileSync('blockchain/voting.sol').toString()
compiledCode = solc.compile(code)
abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
VotingContract = web31.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Voting'].bytecode
deployedContract = VotingContract.new(['Rahul', 'Arvind', 'Narendra', 'Rajnath', 'Piyush', 'Smriti'], {
    data: byteCode,
    from: web31.eth.accounts[0],
    gas: 4700000
});
deployedContract.address
JSON.stringify(abiDefinition)
contractInstance = VotingContract.at(deployedContract.address)