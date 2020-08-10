<template>
  <svg
    :width="width"
    :height="height"
    :fill="color"
    viewBox="0 0 16 16"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 13.333H14V15.9997L10.4447 13.333H5.33333V10.6664H6.66667V11.9997H10.8887L12.6667 13.333V11.9997H14.6667V6.66569H13.3333V5.33236H16V13.333ZM12 9.33302H5.55533L2 11.9997V9.33302H0V-0.000976562H12V9.33302Z"/>
  </svg>
</template>

<script>
  import MixinIcon from '../mixins/MixinIcon.js'

  export default {
    mixins: [
      MixinIcon
    ]
  };
</script>

<style lang="css" scoped>

</style>
