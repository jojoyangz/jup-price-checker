const axios = require('axios');

async function getJupPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=jupiter&vs_currencies=usd');
    const jupPrice = response.data.jupiter.usd;
    return jupPrice;
  } catch (error) {
    console.error('Error retrieving JUP price:', error);
    throw error;
  }
}

module.exports = {
  getJupPrice
};
