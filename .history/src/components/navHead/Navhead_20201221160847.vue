<template>
  <div class="box flex">
    <div class="left flex a-center">
      <div class="round bgc-w">
        <div class="text cb fw-b t-center">M</div>
      </div>
    </div>
    <div class="right flex">
      <div class="search">
       <Input suffix="ios-search" placeholder="请输入商品信息" style="width: 300px" />
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
.search{
    width: 450px;
    height:40px;
    background-color: rgb(64, 146, 105);
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.search>Input{
    height: 40px;
    outline: none;
    border: 1px solid rgb(48,93,196); 
    padding-left: 8px;
    font-size: 14px;  
}


</style>
