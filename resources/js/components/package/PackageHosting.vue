<template>
  <div class="package__hosting">
    <div class="package__hosting--title">
      <h1>Paket Hosting Singapura yang Tepat</h1>
      <h1>Diskon 40% + Domain dan SSL Gratis untuk Anda</h1>
    </div>
    <div class="package__hosting--package">
      <div class="package__hosting--package--each" :class="data.borderActive" v-for="(data, i) in listPackages" :key="i">
        <img rel="prefetch" src="/images/banner-best-seller.png" v-if="data.showImage" alt="">
        <div class="package__hosting--package--title" :class="data.active2">
          <h3>{{data.title}}</h3>
        </div>
        <div class="package__hosting--package--price" :class="data.active2">
          <p>Rp {{data.priceBefore}}</p>
          <div class="price__discounted">Rp <p v-html="data.priceAfter"></p>/bln</div>
        </div>
        <div class="package__hosting--package--reg" :class="data.active">
          <span v-html="data.regUser"></span>
          <span> Pengguna Terdaftar</span>
        </div>
        <div class="package__hosting--package--include">
          <ul>
            <li v-for="item in data.includes" v-html="item.include"></li>
          </ul>
        </div>
        <div class="package__hosting--package--cta btn md transblue">
          {{data.button}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Packages from '../../json/Packages.json';
import IconStar from '../icons/IconStar'

export default {
  components: {
    IconStar
  },
  data() {
    return {
      listPackages: Packages,
    }
  }
}
</script>

<style lang="css" scoped>
</style>
