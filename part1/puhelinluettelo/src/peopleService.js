import axios from 'axios'

const baseurl = 'http://localhost:3001/persons'

const getPeople = () => {
    return axios.get(baseurl);
}

const addPerson = (newPerson) => {
    return axios.post(baseurl, newPerson)
} 

export default {
    getPeople,
    addPerson
}