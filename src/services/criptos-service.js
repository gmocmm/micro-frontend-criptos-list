import axios from 'axios';
//const url = 'https://rest.coinapi.io/v1/assets?apikey=60E1CC87-B20A-4A6B-AD76-962D4A9EAF43&limit=10';
const url = 'https://rest.coinapi.io/v1/assets/BTC;ETH;ETH2;USDT;BNB;USDC;SOL;XRP;LUNA;ADA?apikey=60E1CC87-B20A-4A6B-AD76-962D4A9EAF43';

const getCriptos = () => {
  return axios.get(url).then((res) => res.data);
};

export { getCriptos };
