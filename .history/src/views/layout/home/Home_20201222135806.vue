<template>
  <div class="conbox">
    <!---轮播图--->
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem v-for="(item, index) in banner" :key="index">
        <div class="banbox">
          <img :src="item.picUrl" alt="" />
          <div class="imgb"><img :src="item.picUrl3" alt="" /></div>
          <div class="imgb"><img :src="item.picUrl2" alt="" /></div>
        </div>
      </CarouselItem>
    </Carousel>
    <!---活动版块--->
    <div >
      <div class="pic flex" v-for="(item,index) in activSection" :key="index"  >
       <img :src="item.picUrl" alt="">
      </div>
    </div>
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
      activSection:[]
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
          console.log(res);
          this.banner = res.data[0].panelContents; //拿到轮播图的数据
          this.activSection = res.data[1].panelContents;//拿到活动版块的数据
          // console.log(this.banner);
          console.log(this.activSection);
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
  margin-top:20px;
  width: 1280px;
}
.banbox {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 20px;
  }
  .imgb {
    position: absolute;
    top: 0;
    left: 120px;
  }
}
 .pic{
    width: 200px;
    height: 200px;
    img{
      width: 100%;
    }
  }
</style>
