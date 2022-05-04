import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export const getCountryInsights = () => axios.get(`${API_URL}/guest-country-sample.json`)
