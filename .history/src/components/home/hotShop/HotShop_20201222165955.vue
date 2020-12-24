<template>
  <div>{{hotShop}}</div>
</template>

<script>
export default {
  name: '',
  props:{
      hotShop:{
        type:Array,//子组件接收父组件传过来的数据
        required: true,
      }
  },
  data () {
    return {
        
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

</style>
