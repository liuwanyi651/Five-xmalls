<template>
  <div>
    <!-- 公共样式 头部-->
    <div class="header">
      <navHead></navHead>
    </div>
    <div class="nav">
      <navTop></navTop>
    </div>
    <!-- 内容部分 -->
    <div class="main">
        <router-view></router-view>
    </div>
    <!-- 公共样式 尾部-->
    <div class="footer">
        <navFoot></navFoot> 
    </div>
  </div>
</template>
<script>
import navTop from "../../components/navHead/Navhead";
import navTop from "../../components/navTop/Navtop";
import navFoot from "../../components/navFoot/Navfoot";
export default {
  name: "",
  props: {},
  components: {
    // 注册组件
    navHead,
    navTop,
    navFoot,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>
<style lang="scss">
.header {
  width: 100%;
  height: 100px;
  background-color: rgba(5,5,5);
}
.nav{
  width: 100%;
  height: 100px;
  background-color: rgba(247,247,247);
}
.main{
  height: 800px;
}
</style>
