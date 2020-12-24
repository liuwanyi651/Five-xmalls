<template>
  <div class="wholebox flex">
    <div v-for="(item,index) in arr" :key="index" class="flex">
      <div class="name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      arr:[
        {
          name:"综合排序"
        },
        {
          name:"价格从低到高"
        },
        {
          name:"价格从高到低"
        }
      ]
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.wholebox{
  margin-top: 10px;
  width: 1280px;
}
.name{
  padding: 10px;
}
</style>