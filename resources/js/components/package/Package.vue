<template>
  <div class="package">
    <PackageVendor />
    <PackageHosting />
    <PackageLimit />
    <PackageInclude />
    <PackageLaravel />
  </div>
</template>

<script>
import PackageVendor from './PackageVendor'
import PackageHosting from './PackageHosting'
import PackageLimit from './PackageLimit'
import PackageInclude from './PackageInclude'
import PackageLaravel from './PackageLaravel'

export default {
  components: {
    PackageVendor,
    PackageHosting,
    PackageLimit,
    PackageInclude,
    PackageLaravel
  }
}
</script>

<style lang="css" scoped>
</style>
