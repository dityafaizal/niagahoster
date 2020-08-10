<template>
  <div class="package__laravel">
    <div class="package__laravel--title">
      <h1>Mendukung Penuh Framework Laravel</h1>
    </div>
    <div class="package__laravel--bottom">
      <div class="package__laravel--left">
        <p>Tak perlu menggunakan dedicated server atau VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda.</p>
        <ul>
          <li v-for="(data, i) in listData">
            <IconChecklist
              width="18px"
              height="18px"
              color="#00B359"
            />
            <span v-html="data.caption"></span>
          </li>
        </ul>
        <span>Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</span>
        <div class="package__laravel--left--cta btn md blue">
          Pilih Hosting Anda
        </div>
      </div>
      <div class="package__laravel--right">
        <IconBannerSupport
          width="494.737"
          height="356.298"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconChecklist from '../icons/IconChecklist'
import IconBannerSupport from '../icons/IconBannerSupport'

export default {
  components: {
    IconChecklist,
    IconBannerSupport
  },
  data() {
    return {
      listData: [
        {"caption": "Install Laravel <span style='font-weight:bold;'>1 klik</span> dengan Softaculous Installer."},
        {"caption": "Mendukung ekstensi <span style='font-weight:bold;'>PHP MCript, phar, mbstring, json,</span> dan <span style='font-weight:bold;'>fileinfo.</span>"},
        {"caption": "Tersedia <span style='font-weight:bold;'>Composer</span> dan <span style='font-weight:bold;'>SSH</span> untuk menginstall Packages pilihan Anda."},
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
