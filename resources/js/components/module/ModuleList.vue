<template>
  <div class="module__list">
    <div class="module__list--title">
      <h1>Modul Lengkap untuk Menjalankan Aplikasi Anda.</h1>
    </div>
    <div class="module__list--list">
      <ul>
        <li v-for="(data, i) in listModules.modules" :key="i">{{data.module}}</li>
      </ul>
    </div>
    <div class="module__list--cta btn md transblue">
      Selengkapnya
    </div>
  </div>
</template>

<script>
import ModuleList from '../../json/ModuleList.json';

export default {
  data() {
    return {
      listModules: ModuleList,
    }
  }
}
</script>

<style lang="css" scoped>
</style>
