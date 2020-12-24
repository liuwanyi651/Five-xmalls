<template>
  <div class="flex">
    <div v-for="(item,index) in arr" :key="index">
      <div>{{item.name}}</div>
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

<style lang='scss' scoped>

</style>