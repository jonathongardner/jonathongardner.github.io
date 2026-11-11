<template>
  <section>
    <div class="hero is-fullheight is-default is-bold">
      <nav-bar />
      <router-view class="hero-body"/>
      <footer-bar />
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/common/nav-bar.vue'
import FooterBar from '@/components/common/footer-bar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
  },
  mounted () {
    const path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.$router.replace({ path: '/' + path.replace(/^\/+/, '') });
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
