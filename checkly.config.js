const LOCAL_DEV_URL = 'https://localhost:8080'
const PREVIEW_URL = process.env.ENVIRONMENT_URL
const PROD_URL = 'https://example.com'


const config = {
  headless: process.env.NODE_ENV !== 'development',
  baseURL: process.env.NODE_ENV === 'development' ? LOCAL_DEV_URL : PREVIEW_URL || PROD_URL,
  defaultViewPortSize: {
    width: 1280,
    height: 720
  }
};

module.exports = config
