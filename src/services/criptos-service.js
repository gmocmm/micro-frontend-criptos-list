import axios from 'axios';

const url = 'https://rest.coinapi.io/v1/assets';
const currencies = ['BTC', 'ETH', 'ETH2', 'USDT', 'BNB', 'USDC', 'SOL', 'XRP', 'LUNA', 'ADA'];
const apiKey = 'BE7A60F2-2604-4B65-B523-541252F104C5';

const getCriptos = async () => {
  const data = await axios.get(`${url}/${currencies.join(';')}?apikey=${apiKey}`).then((res) => res.data);
  return data;
};

export {
  getCriptos
};
