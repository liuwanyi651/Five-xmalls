<template>
  <div class="all">
    <div class="allbox">
      <div class="loginbox">
        <div class="titie bs"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
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
// 其位于中间box
.all {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(246, 246, 246);
  display: flex;
  flex-direction: column;
}
.allbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.loginbox {
  width: 452px;
  height: 673px;
  background: white;
  box-shadow: 1px 1px 3px rgb(201, 199, 199);
  border-radius: 20px;
}
// 头部
.titie {
  width: 450px;
  height: 197px;
  background-image: url(http://xmall.exrick.cn/static/images/smartisan_4ada7fecea.png);
  background-repeat: no-repeat;
  background-size: 140px;
  position: position;
  background-position: top;
  height: 92px;
  margin: 23px 0 50px;
  padding: 75px 0 0;
  box-shadow: none;
}
</style>
