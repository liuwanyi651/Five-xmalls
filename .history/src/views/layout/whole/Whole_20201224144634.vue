<template>
  <div class="wholebox">
    <!---顶部标题---->
    <div class="top flex a-center">
      <div v-for="(item, index) in arr" :key="index" class="flex">
        <div
          class="name fs12 c179"
          :class="{ active: flag === index }"
          @click="go(item, index)">
          {{ item.name }}
        </div>
      </div>
      <div>
        <Input v-model="priceGt" placeholder="价格" style="width: 90px" class="ml20" /> -
        <Input v-model="priceLte" placeholder="价格" style="width: 90px" />
      </div>
      <div class="ml20">
        <Button type="primary" style="width: 90px" @click="confirm">确定</Button>
      </div>
    </div>
    <!---渲染数据---->
    <div>
      <div class="hotbox">
        <div v-for="(item, index) in list" :key="index">
          <div class="dian">
            <img :src="item.productImageBig" alt="" />
            <div class="productName">
              {{ item.productName }}
            </div>
            <div class="subTitle">
              {{ item.subTitle }}
            </div>
            <div class="price">￥{{ item.salePrice + ".00" }}</div>
            <div class="pri">
              <Button class="btn">查看详情</Button>
              <Button type="primary">加入购物车</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pd20">
      <Page show-sizer show-elevator :total="20"  />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      flag: 0,
      value: "",
      values: "",
      page:1,//请求页数
      size:20,//请求条数
      sort:'',//排序方式
      priceGt:'',//价格区间 从多少开始
      priceLte:'',//价格区间 到哪结束
      arr: [
        {
          name: "综合排序",
        },
        {
          name: "价格从低到高",
        },
        {
          name: "价格从高到低",
        },
      ],
      list: [],
    };
  },
  components: {},
  methods: {
    data(){
       this.$api.allGoods(this.page,this.size,this.sort,this.priceGt,this.priceLte).then((res)=>{
         console.log(res);
         this.list = res.data;
       })
    },
    go(item, index) {
      this.flag = index; //动态绑定
      console.log(item);
      if(index===0){
        this.data()
      }else if(index===1){
        this.sort=1
        this.data()
      }else if(index===2){
        this.sort=-1
       this.data()
      }
    },
    // 确定按钮
    confirm() {
      this.data()
    },
  },
  mounted() {
    this.data()
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.wholebox {
  width: 1280px;
}
.name {
  padding: 20px 10px;
}
.name:hover {
  cursor: pointer;
  color: rgb(55, 119, 214);
  font-weight: bold;
}
.active {
  color: rgb(55, 119, 214);
  font-weight: bold;
}
// 下面渲染的数据

.hotbox {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  background-color: white;
}
img {
  width: 300px;
    height: 310px;
    margin-left: 19px;
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
  .price {
    display: none;
  }
  .pri {
    display: block;
    padding-bottom: 18px;
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
.pri {
  display: none;
  margin-top: 24px;
}
.btn {
  margin-right: 10px;
}
</style>
