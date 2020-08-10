<template>
  <div class="hero">
    <div class="hero__section">
      <h1>PHP Hosting</h1>
      <h1>Cepat, handal, penuh dengan <br> modul PHP yang anda butuhkan</h1>
      <ul>
        <li v-for="(data, i) in dataList" :key="i">
          <IconChecklist
            width="16px"
            height="16px"
            color="#00B359"
          />
          <span>{{data.title}}</span>
        </li>
      </ul>
    </div>
    <div class="hero__section hero__banner">
      <IconBannerPhp
        width="463.299"
        height="327.333"
      />
    </div>
  </div>
</template>

<script>
import IconChecklist from '../icons/IconChecklist'
import IconBannerPhp from '../icons/IconBannerPhp'

export default {
  components: {
    IconChecklist,
    IconBannerPhp
  },
  data() {
    return {
      dataList: [
        {'title': 'Solusi PHP untuk performa query yang lebih cepat.'},
        {'title': 'Konsumsi memori yang lebih rendah.'},
        {'title': 'Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7'},
        {'title': 'Fitur enkripsi IonCube dan Zend Guard Loaders'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
