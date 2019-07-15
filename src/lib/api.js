import axios from 'axios'

export const test = () => axios.get('test.json')
export const getBanner = () => axios.get('get_banner.json')
export const getMd = () => axios.get('README.md')