export const API_ORIGIN = process.env.NODE_ENV === 'production' ? ('https://' + (process.env.PROD_API_ORIGIN || 'luban-h5-api.herokuapp.com')) : 'http://localhost:1337' // for local dev
