<template>
  <div class="app">
    <Nav />
    <Hero />
    <Package />
    <Module />
    <Footer />
  </div>
</template>

<script>
import Nav from './nav/Nav'
import Hero from './hero/Hero'
import Package from './package/Package'
import Module from './module/Module'
import Footer from './footer/Footer'

export default {
  components: {
    Nav,
    Hero,
    Package,
    Module,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .app {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>
