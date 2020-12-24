<template>
  <div>
    <div class="hot">热门商品</div>
    <div class="hotbox">
      <div v-for="(item, index) in hotShop" :key="index" class="imgbox" @click="goto(item)">
        <div>
          <div class="dian" @mouseenter="enter(item)" @mouseleave="Leave(item)">
            <img :src="item.picUrl" alt="" />
            <div class="productName">
              {{ item.productName }}
            </div>
            <div class="subTitle">
              {{ item.subTitle }}
            </div>
            <div class="price" v-if="!item.default">￥{{ item.salePrice + ".00" }}</div>
            <div class="but price" v-else>
              <Button>查看详情</Button>
              <Button type="primary">加入购物车</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotShop: {
      type: Array, //子组件接收父组件传过来的数据
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    // 移入
    enter(a) {
        // console.log(a);
        // console.log(a.default);
        a.default = true;
    },
    // 移出
    Leave(b) {
        b.default = false;
    },
    // 跳转到详情页
    goto(item){
      console.log(item);
    }
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
// 热门推荐图片
.hot {
  height: 50px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: rgb(246, 246, 246);
  font-size: 18px;
  line-height: 50px;
  padding-left: 28px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.hotbox {
  height: 428px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.dian {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dian:hover {
  box-shadow: 3px 3px 3px 3px rgb(212, 212, 212);
  cursor: pointer;
  
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
