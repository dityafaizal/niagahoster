<template>
  <div class="nav">
    <div class="nav__top">
      <div class="nav__top--left" v-if="topLeft">
        <IconSave
          width="26px"
          height="26px"
        />
        <span>Gratis Ebook 9 Cara Cerdas Menggunakan Domain</span>
        <span @click="hideTopleft()">[x]</span>
      </div>
      <ul>
        <li>
          <IconPhone
            width="18px"
            height="18px"
            color="#4C4C4C"
          />
          <span>0274-5305505</span>
        </li>
        <li>
          <IconChat
            width="18px"
            height="18px"
            color="#4C4C4C"
          />
          <span>Live Chat</span>
        </li>
        <li>
          <IconUser
            width="18px"
            height="18px"
            color="#4C4C4C"
          />
          <span>Member Area</span>
        </li>
      </ul>
    </div>
    <div class="nav__bottom" id="nav">
      <div class="nav__bottom--inner">
        <div class="nav__left">
          <img rel="prefetch" :src="'/images/niagahoster-logo-sm.png'" alt="">
        </div>
        <div class="nav__right">
          <ul>
            <li>Hosting</li>
            <li>Domain</li>
            <li>Server</li>
            <li>Website</li>
            <li>Afiliasi</li>
            <li>Promo</li>
            <li>Pembayaran</li>
            <li>Review</li>
            <li>Kontak</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <Slide
        right
        :closeOnNavigation="true"
      >
        <span>Hosting</span>
        <span>Domain</span>
        <span>Server</span>
        <span>Website</span>
        <span>Afiliasi</span>
        <span>Hosting</span>
        <span>Promo</span>
        <span>Pembayaran</span>
        <span>Review</span>
        <span>Kontak</span>
        <span>Blog</span>
        <span>
          <IconPhone
            width="18px"
            height="18px"
            color="#8E8E8E"
          />
          <span>0274-5305505</span>
        </span>
        <span>
          <IconChat
            width="18px"
            height="18px"
            color="#8E8E8E"
          />
          <span>Live Chat</span>
        </span>
        <span>
          <IconUser
            width="18px"
            height="18px"
            color="#8E8E8E"
          />
          <span>Member Area</span>
        </span>
      </Slide>
    </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import IconSave from '../icons/IconSave'
import IconChat from '../icons/IconChat'
import IconUser from '../icons/IconUser'
import IconPhone from '../icons/IconPhone'

export default {
  components: {
    Slide,
    IconSave,
    IconChat,
    IconUser,
    IconPhone
  },
  data() {
    return {
      topLeft: true
    }
  },
  methods: {
    hideTopleft() {
      this.topLeft = false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
