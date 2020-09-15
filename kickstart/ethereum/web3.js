import Web3 from 'web3';


let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
// We are not running metamask because we are on the server or we have not installed metamask on the browser
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/dc7eee2153fd4a0aa9b98f3a4be65099'
  );
  web3 = new Web3(provider);
}


export default web3;
