import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xe314835D46608e74003422C3ECFC95e3213370b7'
  );

  export default instance;
