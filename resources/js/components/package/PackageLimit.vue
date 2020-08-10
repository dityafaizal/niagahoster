<template>
  <div class="package__limit">
    <div class="package__limit--title">
      <h1>Powerful dengan Limit PHP yang Lebih Besar</h1>
    </div>
    <div class="package__limit--list">
      <ul>
        <li v-for="(data, i) in listDataLeft">
          <IconChecklist
            width="18px"
            height="18px"
            color="#00B359"
          />
          <span>{{data.list}}</span>
        </li>
      </ul>
      <ul>
        <li v-for="(data, i) in listDataRight">
          <IconChecklist
            width="18px"
            height="18px"
            color="#00B359"
          />
          <span>{{data.list}}</span>
        </li>
      </ul>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import IconChecklist from '../icons/IconChecklist'

export default {
  components: {
    IconChecklist
  },
  data() {
    return {
      listDataLeft: [
        {"list": "max execution time 300s"},
        {"list": "max execution time 300s"},
        {"list": "php memory limit 1024 MB"}
      ],
      listDataRight: [
        {"list": "post max size 128 MB"},
        {"list": "upload max filesize 128 MB"},
        {"list": "max input vars 2500"}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
