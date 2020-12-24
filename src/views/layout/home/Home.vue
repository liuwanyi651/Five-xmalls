<template>
  <div class="conbox">
    <!---轮播图--->
    <banner :banner="banner"></banner>
    <!---活动版块--->
    <activSection :list="activSection"></activSection>
    <!---热门商品-->
    <hotShop :hotShop="hotShop"></hotShop>
    <!---官方精选、品牌周边、品牌精选、--->
    <brand :brand="brand1" title="官方精选"></brand>
    <brand :brand="brand2" title="品牌周边"></brand>
    <brand :brand="brand3" title="品牌精选"></brand>
    <!---活动版块2--->
    <activSection :list="activSectionTwo"></activSection>
  </div>
</template>

<script>
import banner from "../../../components/home/banner/Banner";
import activSection from "../../../components/home/activSection/ActivSection";
import hotShop from "../../../components/home/hotShop/HotShop";
import brand from "../../../components/home/brand/Brand";
export default {
  name: "",
  props: {},
  data() {
    return {
      banner: [],
      activSection: [],
      hotShop: [],
      activSectionTwo: [],
      brand1:[],
      brand2:[],
      brand3:[],
      flag: false,
    };
  },
  components: {
    //注册组件
    banner, //轮播图
    activSection, //活动板块
    hotShop, //热门商品
    brand,//官方精选
  },
  methods: {
    getGoodsHome() {
      //获取首页商品推荐
      this.$api
        .getGoodsHome()
        .then((res) => {
          // console.log(res);
          this.banner = res.data[0].panelContents; //拿到轮播图的数据
          this.activSection = res.data[1].panelContents; //拿到活动版块的数据
          this.hotShop = res.data[2].panelContents; //拿到热门商品的数据
          this.brand1 = res.data[3].panelContents; //拿到官方精选的数据
          this.brand2 = res.data[4].panelContents; //拿到品牌周边的数据
          this.brand3 = res.data[5].panelContents; //拿到品牌精选的数据
          this.activSectionTwo = res.data[6].panelContents; //拿到活动版块2的数据
          // console.log(this.banner);
          // console.log(this.activSection);
          // console.log(this.hotShop);
          this.hotShop.map((item) => this.$set(item, "default", false)); //this.$set 添加属性
          // console.log(this.hotShop);
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
</style>
