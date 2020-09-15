const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// 'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
//'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'


const provider = new HDWalletProvider(
  'chase happy marriage benefit idle slim quarter live ostrich drop empty wheel',
  'https://rinkeby.infura.io/dc7eee2153fd4a0aa9b98f3a4be65099'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
