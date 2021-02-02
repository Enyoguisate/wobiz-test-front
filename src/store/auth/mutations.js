export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
    localStorage.setItem('token', state.token);
    localStorage.setItem('userId', state.userId);
    localStorage.setItem('tokenExpiration', state.tokenExpiration );
  }
};