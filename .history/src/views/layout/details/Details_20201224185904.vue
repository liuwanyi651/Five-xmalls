<template>
  <div>hahhah</div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      id:'',
      productId:''
    }
  },
  components: {},
  methods: {
    getDetails(){
       this.id = this.$route.query.id //把接收过来的query.id参数 赋值给this.id
       console.log(this.id); //得到id 150635087972564
       this.$api.goodsDetails(this.id).then((res)=>{
         console.log(res.data.result);
       })
    }
  },
  mounted() {
    this.getDetails()
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>