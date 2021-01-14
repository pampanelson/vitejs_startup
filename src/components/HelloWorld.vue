<template>
  <div>count : {{ count }}</div>
  <button @click="decreaseCounter">-</button>
  <button @click="increaseCounter">+</button>
  <div>albums : {{ albums }}</div>
  <button @click="getAlbumsInfo">Albums</button>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'HelloWorld',
  setup() {
    const store = useStore();
    const increaseCounter = () => {
      // this.$store.commit('increment', number);
      store.dispatch('posts/fetchDataFromServer', 2);
    };

    const getAlbumsInfo = () => {
      store.dispatch('albums/fetchAlbums');
    };
    const count = computed(() => {
      return store.state.posts.count;
    });

    const albums = computed(() => {
      return store.state.albums.all;
    });
    return {
      increaseCounter,
      getAlbumsInfo,
      count,
      albums,
    };
  },
};
</script>
