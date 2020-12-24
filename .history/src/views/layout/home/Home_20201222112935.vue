<template>
  <div class="conbox">
    <banner></banner>
  </div>
</template>

<script>
import banner from "../../../components/home/banner/Banner"
export default {
  name: '',
  props:{},
  data () {
    return {
      banner:[]
    }
  },
  components: {
    //注册组件
    banner
  },
  methods: {
    getGoodsHome() {
            //获取首页商品推荐
            this.$api.getGoodsHome().then(res => {
                // console.log(res);
                this.banner=res.data[0].panelContents //拿到轮播图的数据
                console.log(this.banner);
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