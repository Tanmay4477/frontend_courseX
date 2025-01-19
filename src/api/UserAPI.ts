import api from './config/axiosConfig';


const UserAPI = {
    signin: async (email: string, password: string) => {
        const response = await api.request({
            url: '/login',
            method: 'POST',
            data: {
                username: email,
                password: password
            },
        });
        return response;
    },

    logout: async () => {
        const response = await api.request({
            url: "/logout",
            method: 'POST',
        });
        return response;
    },

    verifyCookie: async() => {
        const response = await api.request({
            url: '/verify',
            method: 'GET',
        });
        console.log("my response", response);
        return response;
    },
}

export default UserAPI;