import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export const getCountriesInsights = () => axios.get(`${API_URL}/guest-country-sample.json`)
