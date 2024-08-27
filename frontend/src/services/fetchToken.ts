import axios from "axios";

export async function fetchToken() {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_ENPOINT_BACKEND}/generate-token`); // Ajusta la URL según tu configuración
      const token = response.data.token;
      console.log(token)
      localStorage.setItem('jwtToken', token); // Almacenar el token en localStorage
    } catch (error:any) {
      console.error('Error fetching token:', error);
      if (error.response && error.response.status === 401) {
        window.alert("refresque la pagina, el token ha expirado")
      }
    }
  }