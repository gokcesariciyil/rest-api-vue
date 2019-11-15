import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  movies: []
}

const getters = {
  getMovies(state) {
    return state.movies;
  }
}

const mutations = {
    updateMoviesList(state, product) {
      state.movies.push(product);
    }
}

const actions = {
  initApp({commit}) {
    Vue.http.get('http://www.omdbapi.com/?s=Iron Man&apikey=d3eb2c45')
      .then(response => {
        let movie = response.body.Search;
        console.log(response.body);
        // commit("updateMoviesList", movie);
        for (let key in movie) {
          movie[key].key = key;
          commit("updateMoviesList", movie[key]);
        }
      })

  }
}

export default {
  getters,
  mutations,
  actions,
  state
}
