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
import navHead from "../../components/navHead/Navhead";
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5,5,5);
}
.nav{
  width: 100%;
  height: 100px;
  background-color: rgba(247,247,247);
  display: flex;
  justify-content: center;
  align-items: center;
}
.main{
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  background-color: rgba(237,237,237);
}
.footer{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
