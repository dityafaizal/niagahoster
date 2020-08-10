<template>
  <div class="package__vendor">
    <div class="package__vendor--each">
      <IconHostZend
        width="203"
        height="43"
      />
      <span>PHP Zend Guard Loader</span>
    </div>
    <div class="package__vendor--each">
      <IconHostComp
        width="123"
        height="162"
      />
      <span>PHP Composer</span>
    </div>
    <div class="package__vendor--each">
      <IconHostIon
        width="228"
        height="50"
      />
      <span>PHP ionCube Loader</span>
    </div>
  </div>
</template>

<script>
import IconHostComp from '../icons/IconHostComp'
import IconHostIon from '../icons/IconHostIon'
import IconHostZend from '../icons/IconHostZend'

export default {
  components: {
    IconHostComp,
    IconHostIon,
    IconHostZend
  }
}
</script>

<style lang="css" scoped>
</style>
