import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// Configuração global de Axios
const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000, // Define um timeout de 10 segundos
});

// Interceptor para adicionar o token de autenticação em cada requisição
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("@Devices:token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const fetchDevices = async () => {
  try {
    const response = await api.get(`/devices`);
    return response.data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

export const selectDevice = async (deviceId: number) => {
  try {
    const response = await api.post(`/devices/select`, { device_id: deviceId });
    return response.data;
  } catch (error) {
    console.error('Error selecting device:', error);
    throw error;
  }
};
export const fetchUserType = async () => {
  try {
    const token = localStorage.getItem("@Devices:token");
    const response = await axios.get(`${apiUrl}/user-type`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userType = response.data.user_type;
    const userName = response.data.user_name;
    const isAuthenticated = userType !== null && userType !== undefined;
    return { userType, isAuthenticated,userName };
  } catch (error) {
    return { userType: "", isAuthenticated: false, userName:""};
  }
};