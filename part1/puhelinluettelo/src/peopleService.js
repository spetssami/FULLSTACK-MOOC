import axios from 'axios'

const baseurl = 'http://localhost:3001/persons'

const getPeople = () => {
    return axios.get(baseurl);
}

const addPerson = (newPerson) => {
    return axios.post(baseurl, newPerson)
}

const deletePerson = (id) => {
    return axios.delete(`${baseurl}/${id}`)
}
const updatePerson = (person) => {
    const {name, number, id} = person
    return axios.put(`${baseurl}/${id}`, {name, number})
        .then(res => res.data)
}

export default {
    getPeople,
    addPerson,
    deletePerson,
    updatePerson
}