<template>
  <div class="footer__nav">
    <div class="footer__nav--section">
      <div class="footer__nav--list" v-for="(data, i) in listNav" :key="i">
        <div class="footer__nav--list--title">
          <h4>{{data.title}}</h4>
        </div>
        <div class="footer__nav--list--content" v-for="(data, i) in data.lists">
          <span class="link">{{data.list}}</span>
        </div>
      </div>
      <div class="footer__nav--list">
        <div class="footer__nav--list--title">
          <h4>Newsletter</h4>
        </div>
        <div class="footer__nav--list--content">
          <div class="input--newsletter">
            <input type="text" placeholder="Email">
            <div class="btn sm blue">
              Berlangganan
            </div>
          </div>
          <span>Dapatkan promo dan konten menarik dari penyedia hosting terbaik Anda.</span>
        </div>
      </div>
      <div class="footer__nav--list">
        <div class="footer__nav--list--content">
          <div class="footer__nav--list--content--svg">
            <IconFbCircle
              width="44px"
              height="44px"
              color="#8E8E8E"
            />
            <IconTwitterCircle
              width="44px"
              height="44px"
              color="#8E8E8E"
            />
            <IconGplusCircle
              width="44px"
              height="44px"
              color="#8E8E8E"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterNavList from '../../json/FooterNavList.json';
import IconFbCircle from '../icons/IconFbCircle'
import IconTwitterCircle from '../icons/IconTwitterCircle'
import IconGplusCircle from '../icons/IconGplusCircle'

export default {
  components: {
    IconFbCircle,
    IconTwitterCircle,
    IconGplusCircle
  },
  data() {
    return {
      listNav: FooterNavList
    }
  }
}
</script>

<style lang="css" scoped>
</style>
