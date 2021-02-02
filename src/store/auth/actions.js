import axios from "axios";

export default {
  async auth(context, payload) {
    let url = `https://powerful-taiga-75590.herokuapp.com/login`;

    const options = {
      username: payload.email,
      password: payload.password,
    };

    await axios
      .post(url, options)
      .then((res) => {
        if (res.data && res.data.codigo === 200) {
          context.dispatch("setUser", {
            token: res.token,
            userId: res.user_id,
            tokenExpiration: res.expires,
          });
          window.location.href = "https://www.wobiz.com/";
        }
      })
      .catch(() => {
        const error = new Error(
          "Los datos de inicio de sesión son incorrectos"
        );
        throw error;
      });
  },
};
