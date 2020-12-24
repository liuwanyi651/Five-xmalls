<template>
  <div class="conbox">

  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
    getGoodsHome() {
            //获取首页商品推荐
            this.$api.getGoodsHome().then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err)
            })
        },
  },
  mounted() {
    this.getGoodsHome()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.conbox{
  width: 80%;
  height: 500px;
  border: 1px solid red;
}
</style>