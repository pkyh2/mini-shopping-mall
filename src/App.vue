<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'

export default {
  components: { Header, Footer },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style>
</style>
