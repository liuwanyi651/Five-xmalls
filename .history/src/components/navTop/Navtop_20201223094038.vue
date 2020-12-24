<template>
  <div class="ulbox">
    <ul v-for="(item, index) in arr" :key="index">
      <li @click="goto(item)">{{ item.name }}</li>
    </ul>
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
          path: "/ ",
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
    goto(item1) {
    //   console.log(item1);
      let whole = item1.path;
    //   console.log(whole);
      this.$router.push("/whole");
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.ulbox {
  width: 80%;
  display: flex;
  align-items: center;
  ul {
    padding: 10px;
    margin-left: 2px;
    color: rgba(65, 63, 63, 0.8);
    font-size: 14px;
  }
  li:hover{
    color: blue;
  }
}
</style>
