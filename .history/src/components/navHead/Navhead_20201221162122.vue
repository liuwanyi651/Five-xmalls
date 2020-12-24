<template>
  <div class="box flex">
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
      <div class="flex">
        <div><i class="icnfont icon-yonghuming icon"></i></div>
        <div><i class="icnfont icon-gouwuche2 icon"></i></div>
        <div class="yuan">0</div>
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
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 80%;
  background-color: burlywood;
  justify-content: center;
  align-items: center;
}
.left {
  width: 40%;
  background-color: cadetblue;
  .round {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin: 26px;
    .text {
      font-size: 25px;
      line-height: 48px;
    }
  }
}
.right {
  height: 40px;
  background-color: hotpink;
  width: 60%;
}
.search {
  width: 400px;
  background-color: rgb(64, 146, 105);
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
</style>
