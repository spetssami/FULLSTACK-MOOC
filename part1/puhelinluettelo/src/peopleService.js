import axios from 'axios'

const baseurl = '/api/persons'

const getPeople = () => {
    return axios.get(baseurl);
}

const addPerson = (newPerson) => {
    return axios.post(baseurl, newPerson)
}

const deletePerson = (id) => {
    return axios.delete(`${baseurl}/${id}`)
}
const updatePerson = async (id, name, number) => {
    console.log(name, number, id);
    const res = await axios.put(`${baseurl}/${id}`, { name, number });
    return res.data;
}

export default {
    getPeople,
    addPerson,
    deletePerson,
    updatePerson
}