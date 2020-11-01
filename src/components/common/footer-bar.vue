<template>
  <footer class="footer">
    <div class="container contact-list">
      <div v-for='footer in footers' :key='footer.label' >
        <a class='is-link' :href='footer.href' target="_blank">
          <i :class='footer.icon'></i> {{ footer.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      footers: [
        { label: 'Github', icon: 'fab fa-github',  href: 'https://github.com/jonathongardner' },
        { label: 'LinkedIn', icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/jonathongardner35' },
        { label: 'Contact', icon: 'fa fa-paper-plane', href: 'https://docs.google.com/forms/d/e/1FAIpQLSef3-zTIniC_gD29zRZvVwsMfpmhOsqONd7dFj9EywcD0oAEA/viewform' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.contact-list {
  display: flex;
  justify-content: center;
  div {
    padding: 0px 10px;
  }
}
</style>
