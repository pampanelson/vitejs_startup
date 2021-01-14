import { createStore } from 'vuex';
import { albums } from './albums.js';
const posts = {
  namespaced: true,
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state, number) {
      state.count += number;
    },
  },
  actions: {
    async fetchDataFromServer(ctx, number) {
      console.log('fetch data');
      ctx.commit('increment', number);
    },
  },
};

export const store = createStore({
  modules: {
    posts,
    albums,
  },
});
