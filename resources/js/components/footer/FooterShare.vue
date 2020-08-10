<template>
  <div class="footer__share">
    <div class="footer__share--section">
      <div class="footer__share--left">
        <span>Bagikan jika Anda menyukai halaman ini.</span>
      </div>
      <div class="footer__share--right">
        <ul>
          <li v-for="(data, i) in listData">
            <template>
              <component
                :is="data.svg"
                :key="i"
                :color="data.color"
                width="28px"
                height="28px"
              >
              </component>
            </template>
            <span>{{data.number}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IconFbSquare from '../icons/IconFbSquare'
import IconTwitterSquare from '../icons/IconTwitterSquare'
import IconGplusSquare from '../icons/IconGplusSquare'

export default {
  components: {
    IconFbSquare,
    IconTwitterSquare,
    IconGplusSquare
  },
  data() {
    return {
      listData: [
        {"svg":"IconFbSquare", "color": "#23599B", "number": "80k"},
        {"svg":"IconTwitterSquare", "color": "#00AEF1", "number": "450"},
        {"svg":"IconGplusSquare", "color": "#FC4A35", "number": "1900"}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
