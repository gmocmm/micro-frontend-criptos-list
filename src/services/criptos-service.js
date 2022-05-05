import axios from 'axios';

const url = 'https://rest.coinapi.io/v1';
const currencies = [
  'BTC',
  'ETH',
  'ETH2',
  'USDT',
  'BNB',
  'USDC',
  'SOL',
  'XRP',
  'LUNA',
  'ADA'
];
const apiKey = 'FEC69104-5CFB-4F1A-A2C3-04367ADF9B92';

const getCriptos = async () => {
  const criptos = await axios
    .get(`${url}/assets/${currencies.join(';')}?apikey=${apiKey}`)
    .then((res) => res.data);

  // const icons = await getCriptoIcon();

  // criptos.forEach((cripto, index) => {
  //   const icon = icons.filter((icon) => icon.asset_id === cripto.asset_id)[0];
  //   criptos[index].image = icon ? icon.url : null;
  // });

  return criptos;
};

const getCriptoIcon = async () => {
  const data = await axios
    .get(`${url}/assets/icons/100x100/?apikey=${apiKey}`)
    .then((res) => res.data);
  return data;
};

// const getExchangeRate = async (currencies) => {
//   const today = new Date().toISOString().slice(0, 19);
//   const date = moment().subtract(1, 'days');
//   const yestarday = date.toISOString().slice(0, 19);

//   const data = await Promise.all(
//     currencies.map((currency) => {
//       return fetch(
//         `${url}/exchangerate/${currency}/USD/history?period_id=1DAY&time_start=${yestarday}&time_end=${today}&apikey=${apiKey}`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest'
//           }
//         }
//       ).then((response) => response.json());
//     })
//   );

//   return data;
// };

export { getCriptos, getCriptoIcon };
