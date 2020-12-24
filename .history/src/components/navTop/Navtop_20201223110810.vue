<template>
  <div class="ulbox">
    <div class="ul flex" v-for="(item, index) in arr" :key="index">
      <div class="dot"></div>
      <div class="li" @click="goto(item, index)" :class="{ active: $route.path===item.path }">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "全部",
          path: "/whole",
        },
        {
          name: "品牌周边",
          path: " ",
        },
        {
          name: "捐赠名单",
          path: " ",
        },
        {
          name: "后台管理系统",
          path: " ",
        },
        {
          name: "XPay支付系统",
          path: " ",
        },
        {
          name: "XBoot开发平台",
          path: " ",
        },
        {
          name: "宣传视频",
          path: " ",
        },
        {
          name: "Github",
          path: " ",
        },
        {
          name: "商用授权",
          path: " ",
        },
      ],
    };
  },
  components: {},
  methods: {
    goto(a, b) {
      console.log(a);
      console.log(b);
      this.flag = b;
      this.$router.push(a.path);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.ulbox {
  position: relative;
  width: 80%;
  display: flex;
  align-items: center;
  .dot {
    position: relative;
    top: 9px;
    left: -6px;
    width: 3px;
    height: 3px;
    border-radius: 50px;
    background-color: rgba(110, 108, 108, 0.8);
  }
  .ul {
    padding: 10px;
    margin-left: 2px;
    color: rgba(65, 63, 63, 0.8);
    font-size: 14px;
  }
  .li:hover {
    cursor: pointer;
    color: rgb(16, 121, 219);
    font-weight: bold;
  }
  .active {
    color: rgb(16, 121, 219);
  }
}
</style>
