import api from './config/axiosConfig';


const CourseAPI = {
    fetch: async () => {
        const response = await api.request({
            url: '/courses',
            method: 'GET',
        });
        return response;
    },
}

export default CourseAPI;