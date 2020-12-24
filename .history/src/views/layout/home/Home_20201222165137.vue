<template>
  <div class="conbox">
    <!---轮播图--->
    <banner :banner="banner"></banner>
    <!---活动版块--->
    <activSection :list="activSection"></activSection>
    <!---热门商品-->
    <div>
      <div class="hot">热门商品</div>
      <div class="hotbox">
        <div v-for="(item, index) in hotShop" :key="index" class="imgbox">
          <div>
            <div class="dian" @mouseenter="enter(item)" @mouseleave="Leave(item)">
              <img :src="item.picUrl" alt="" />
              <div class="productName">
                {{ item.productName }}
              </div>
              <div class="subTitle">
                {{ item.subTitle }}
              </div>
              <div class="price" v-if="!item.st">￥{{ item.salePrice + ".00" }}</div>
              <div class="but price" v-else>
                <Button>查看详情</Button>
                <Button type="primary">加入购物车</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---活动版块2--->
    <activSection :list="activSectionTwo"></activSection>
  </div>
</template>

<script>
import banner from "../../../components/home/banner/Banner"
import activSection from "../../../components/home/activSection/ActivSection";
export default {
  name: "",
  props: {},
  data() {
    return {
      banner: [],
      activSection: [],
      hotShop: [],
      activSectionTwo: [],
      flag: false,
    };
  },
  components: {
    //注册组件
    banner,//轮播图
    activSection, //活动板块
  },
  methods: {
    // 移入
    enter(a) {
      console.log(a.st);
      a.st = true;
    },
    // 移出
    Leave(b) {
      b.st = false;
    },
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
          this.hotShop.map((item) => this.$set(item, "st", false));
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
// 热门推荐图片
.hot {
  height: 50px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: rgb(246, 246, 246);
  font-size: 18px;
  line-height: 50px;
}
.hotbox {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: white;
}
.dian {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dian:hover {
  box-shadow: 3px 3px 3px gray;
}
.imgbox {
  width: 600px;
}
.imgbox img {
  width: 45%;
  height: 35%;
}
.productName {
  margin-top: 25px;
  font-size: 16px;
}
.subTitle {
  margin-top: 5px;
  font-size: 12px;
}
.price {
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 35px;
  color: red;
}
.but {
  button {
    margin-left: 15px;
  }
}
</style>
