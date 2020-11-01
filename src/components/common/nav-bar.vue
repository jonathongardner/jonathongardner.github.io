<template>
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="img/icons/android-chrome-512x512.png" alt="Logo">
          </router-link>
          <a role="button" class="navbar-burger burger" :class="{ 'is-active' : showNavbar }" data-target="navbarMenu" @click='toggleNavbar'>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active' : showNavbar }">
          <div class="navbar-end">
            <div class="tabs is-right">
              <ul>
                <li v-for='link in links' :key='link.name' :class="{ 'is-active': isRoute(link.name) }">
                  <router-link :to='link.path'>{{ link.label }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      showNavbar: false,
      links: [
        { name: 'home', path: '/', label: 'Home' },
        { name: 'resume', path: '/resume', label: 'Resume' },
        // { name: 'about', path: '/about', label: 'About' },
      ]
    }
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar
    },
    isRoute(name) {
      return (this.$route.name === name)
    },
  },
  watch: {
    '$route' () {
      this.showNavbar = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
