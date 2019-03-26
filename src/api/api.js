import axios from "axios"

export const getPost = (type, page) =>
	axios.get(`http://gank.io/api/data/${type}/10/${page}`)

export const getBeauty = page =>
	axios.get(`https://gank.io/api/data/福利/10/${page}`)
