import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9a4A5f78fD86AE819e1E8C76B77CF561026bdB78"
);

export default instance;
