<template>
  <div class="package__include">
    <div class="package__include--title">
      <h1>Semua Paket Hosting Sudah Termasuk</h1>
    </div>
    <ul>
      <li v-for="(data, i) in listData" :key="i">
        <div class="package__include--each--img">
          <template>
            <component :is="data.svg" :key="i"></component>
          </template>
        </div>
        <div class="package__include--each--title">
          <h3>{{data.title}}</h3>
        </div>
        <div class="package__include--each--caption">
          <p>{{data.caption}}</p>
        </div>
      </li>
    </ul>
    <div class="divider"></div>
  </div>
</template>

<script>
import IconHostPhp from '../icons/IconHostPhp'
import IconHostSql from '../icons/IconHostSql'
import IconHostCp from '../icons/IconHostCp'
import IconHostGaransi from '../icons/IconHostGaransi'
import IconHostInno from '../icons/IconHostInno'
import IconHostSqlRemote from '../icons/IconHostSqlRemote'

export default {
  components: {
    IconHostPhp,
    IconHostSql,
    IconHostCp,
    IconHostGaransi,
    IconHostInno,
    IconHostSqlRemote
  },
  data() {
    return {
      listData: [
        {"svg":"IconHostPhp", "title": "PHP Semua Versi", "caption": "Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah sesuka Anda!"},
        {"svg":"IconHostSql", "title": "MySQL Versi 5.6", "caption": "Nikmati MySQL versi terbaru, tercepat, dan kaya akan fitur."},
        {"svg":"IconHostCp", "title": "Panel Hosting cPanel", "caption": "Kelola website dengan cPanel canggih yang familiar di hati Anda."},
        {"svg":"IconHostGaransi", "title": "Garansi Uptime 99.9%", "caption": "Data center yang mendukung kelangsungan website Anda 24/7."},
        {"svg":"IconHostInno", "title": "Database InnoDB Unlimited", "caption": "Jumlah dan ukuran database yang tumbuh sesuai kebutuhan Anda."},
        {"svg":"IconHostSqlRemote", "title": "Wildcard Remote MySQL", "caption": "Mendukung s/d 25 max_user_connections dan 100 max_connections."}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
