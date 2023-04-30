import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
console.log(REACT_APP_API_URL);
// axios.defaults.baseURL = REACT_APP_API_URL;

export default function getUsers(pageNumber, setError, setIsLoading, setUsers) {
  setError(false);
  setIsLoading(true);
  axios(`http://localhost:4000/api/users?page=${pageNumber}&limit=${8}`)
    .then(res => {
      setUsers(prev => {
        return [...prev, ...res.data];
      });
    })
    .catch(error => setError(error.message))
    .finally(() => {
      setIsLoading(false);
    });
}
