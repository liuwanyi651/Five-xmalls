<template>
  <div class="head flex">
    <div class="left flex a-center">
      <div class="round bgc-w">
        <div class="text cb fw-b t-center">M</div>
      </div>
    </div>
    <div class="right flex">
      <div class="search">
        <Input
          class="input"
          suffix="ios-search"
          placeholder="请输入商品信息"
          style="width: 300px"
        />
      </div>
      <div class="flex">
        <div class="texta">全部商品</div>
        <div class="texta">捐赠</div>
        <div class="texta">|</div>
      </div>
      <div class="flex a-center">
        <div @click="goLogin"><i class="iconfont icon-yonghuming icon"></i></div>
        <div><i class="iconfont icon-gouwuche2 icon"></i></div>
        <div class="yuan cw t-center">0</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    goLogin(){
      this.$router.push("/login")
    }
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.head {
  width: 80%;
  justify-content: center;
  align-items: center;
}
.left {
  width: 40%;
  .round {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 20px;
    .text {
      font-size: 25px;
      line-height: 40px;
    }
  }
}
.right {
  height: 40px;
  width: 60%;
}
.search {
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.texta {
  width: 100px;
  text-align: center;
  color: white;
  line-height: 40px;
}
.iconfont.icon{
  font-size: 20px;
  color: white;
  margin-right: 10px;
}
.yuan{
  margin-right: 20px;
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 50%;
  background-color: rgb(189, 185, 185);
}
</style>
