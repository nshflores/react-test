require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    googleMaps: {
        apiKey: process.env.REACT_APP_GM_API_KEY
    }
};

module.exports = config;