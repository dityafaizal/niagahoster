<template>
  <div class="module">
    <ModuleList />
    <ModuleLinux />
  </div>
</template>

<script>
import ModuleList from './ModuleList'
import ModuleLinux from './ModuleLinux'

export default {
  components: {
    ModuleList,
    ModuleLinux
  }
}
</script>

<style lang="css" scoped>
</style>
