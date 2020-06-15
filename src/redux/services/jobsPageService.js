import axios from 'axios';

class jobsPageService {
    static getJobDetails() {
        debugger
        return axios
            .get(`http://localhost:5000/api/task/get-all-tasks`, { params: {} })
            .then(res => res)
            .catch(err => err);
    }
} 

export default jobsPageService