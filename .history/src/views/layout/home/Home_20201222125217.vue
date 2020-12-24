<template>
  <div class="conbox">
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem v-for="(item, index) in banner" :key="index">
        <div class="banbox">
          <img :src="item.picUrl" alt="" />
          <!--<div class="img"><img :src="item.picUrl2" alt=""> </div>  
        <div class="img"><img :src="item.picUrl3" alt="">  </div> --->
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
// import banner from "../../../components/home/banner/Banner"
export default {
  name: "",
  props: {},
  data() {
    return {
      banner: [],
      value2: 0,
    };
  },
  components: {
    //注册组件
    // banner
  },
  methods: {
    getGoodsHome() {
      //获取首页商品推荐
      this.$api
        .getGoodsHome()
        .then((res) => {
          // console.log(res);
          this.banner = res.data[0].panelContents; //拿到轮播图的数据
          console.log(this.banner);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getGoodsHome();
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.conbox {
  width: 80%;
  height: 500px;
  border: 1px solid yellow;
  .banbox {
    width: 1220px;
    height: 500px;
  }
}
img{
      width: 100%;
    }
</style>
