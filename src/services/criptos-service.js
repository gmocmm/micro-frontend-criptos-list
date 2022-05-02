import axios from 'axios';

const url = 'https://rest.coinapi.io/v1/assets';
const currencies = ['BTC', 'ETH', 'ETH2', 'USDT', 'BNB', 'USDC', 'SOL', 'XRP', 'LUNA', 'ADA'];
const apiKey = '6F501535-6DCB-4046-B48A-221C99F384DD';

const getCriptos = async () => {
  const criptos = await axios.get(`${url}/${currencies.join(';')}?apikey=${apiKey}`).then((res) => res.data);
  const icons = await getCriptoIcon();

  criptos.forEach((cripto, index) => {
    const icon = icons.filter((icon) => icon.asset_id === cripto.asset_id)[0];
    criptos[index].image = icon ? icon.url : null;
  });

  return criptos;
};

const getCriptoIcon = async () => {
  const data = await axios.get(`${url}/icons/100x100/?apikey=${apiKey}`).then((res) => res.data);
  return data;
};

export {
  getCriptos,
  getCriptoIcon
};
