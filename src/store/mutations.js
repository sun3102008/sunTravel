export default {
  cityName (state,payload) {
    state.city = payload
    try {
      localStorage.city = payload
    } catch (e) {}
  }

}