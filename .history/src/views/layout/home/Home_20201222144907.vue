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
    <div class="flex bs bor-r20 over-h">
      <div class="pic brs_E" v-for="(item, index) in activSection" :key="index">
        <img :src="item.picUrl" alt="" />
      </div>
    </div>
    <!---热门商品-->
    <div class="picurlbox bs bor-r20 over-h">
      <div class="picurlbg">热门商品</div>
      <div class="picurlimg flex">
        <div class="picurl brs_E " v-for="(item, index) in hotShop" :key="index">
          
        </div>
      </div>
    </div>
    <!---活动版块2--->
    <div class="flex bs bor-r20 over-h">
      <div class="pic brs_E" v-for="(item, index) in activSectionTwo" :key="index">
        <img :src="item.picUrl" alt="" />
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
      value2: 0,
      banner: [],
      activSection: [],
      hotShop: [],
      activSectionTwo: [],
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
          this.activSection = res.data[1].panelContents; //拿到活动版块的数据
          this.hotShop = res.data[2].panelContents; //拿到热门商品的数据
          this.activSectionTwo = res.data[6].panelContents; //拿到活动版块2的数据
          // console.log(this.banner);
          // console.log(this.activSection);
          console.log(this.hotShop);
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
  margin-top: 20px;
  width: 1280px;
}
// 轮播图
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
//活动版块
.pic {
  flex: 4;
  img {
    width: 100%;
    flex: 1;
  }
}
// 热门推荐图片
.picurlbox {
  height: 490px;
  .picurlbg {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding-left: 32px;
    background-color: rgba(244, 244, 244);
  }
  .picurlimg{
    width: 609px;
    height: 430px;
    background-color: white;
    flex: 2;
  }
  
}
</style>
