import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://shrouded-tundra-97951.herokuapp.com/'
})

export default instance;