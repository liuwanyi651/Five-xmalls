<template>
  <div>
    <div class="hot">{{title}}</div>
    <div class="hotbox">
      <div v-for="(item, index) in brand" :key="index" >
          <div :class="{active:index === 0}" class="dian" >
            <img :src="item.picUrl" alt="" />
            <div class="productName" v-if="index>0">
              {{ item.productName }}
            </div>
            <div class="subTitle" v-if="index>0">
              {{ item.subTitle }}
            </div>
            <div class="price" v-if="index>0">￥{{ item.salePrice + ".00" }}</div>
            <div class="pri" v-if="index>0">
              <Button class="btn">查看详情</Button>
              <Button type="primary">加入购物车</Button>
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
    brand: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
     
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.hot {
  height: 50px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: rgb(246, 246, 246);
  font-size: 18px;
  line-height: 50px;
}
.hotbox {
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  margin: 0 auto;
  background-color: white;
}
img{
    width: 300px;
    height: 300px;
}
.dian {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dian:hover {
  box-shadow: 3px 3px 3px gray;
  .price{
      display: none;
  }
  .pri{
      display: block;
  }
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
.active{
    img{
        width: 600px;
        height: 430px;
    }
}
.pri{
    display: none;
    margin-top: 24px;
    
}
.btn{
        margin-left: 20px;
    }
</style>
