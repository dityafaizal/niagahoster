<template>
  <div class="footer__payment">
    <div class="footer__payment--section">
      <div class="footer__payment--title">
        <h4>Pembayaran</h4>
      </div>
      <div class="footer__payment--icon">
        <template v-for="(data, i) in listIcon">
          <component :is="data.svg" width="60px" height="60px" color="#8E8E8E"></component>
        </template>
      </div>
      <h5>Aktivasi instan dengan e-Payment. Hosting dan domain langsung aktif!</h5>
    </div>
    <div class="">
      <div class="footer__payment--copyright">
        <div class="footer__payment--copyright--left">
          <p>
            Copyright ©2020 Niagahoster | Hosting Powered by PHP7, CloudLinux, CloudFlare, BitNinja and DC Biznet Technovillage Jakarta <br>
            Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology.
          </p>
        </div>
        <div class="footer__payment--copyright--right">
          <span>Syarat dan Ketentuan</span> | <span>Kebijakan Privasi</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconPayment from '../icons/IconPayment'

export default {
  components: {
    IconPayment
  },
  data() {
    return {
      listIcon: [
        {"svg":"IconPayment"},
        {"svg":"IconPayment"},
        {"svg":"IconPayment"},
        {"svg":"IconPayment"},
        {"svg":"IconPayment"},
        {"svg":"IconPayment"},
        {"svg":"IconPayment"},
        {"svg":"IconPayment"},
        {"svg":"IconPayment"}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
