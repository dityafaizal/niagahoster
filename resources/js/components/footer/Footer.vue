<template>
  <div class="footer">
    <FooterShare />
    <FooterHelp />
    <FooterNav />
    <FooterPayment />
  </div>
</template>

<script>
import FooterShare from './FooterShare'
import FooterHelp from './FooterHelp'
import FooterNav from './FooterNav'
import FooterPayment from './FooterPayment'

export default {
  components: {
    FooterShare,
    FooterHelp,
    FooterNav,
    FooterPayment
  }
}
</script>

<style lang="css" scoped>
</style>
