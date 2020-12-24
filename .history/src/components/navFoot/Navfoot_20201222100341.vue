<template>
  <div class="foot flex">
    <div class="footbox flex">
      <div class="left flex">
        <ul class="list-none">
          <li class="mb10">订单服务</li>
          <li>购买指南</li>
          <li>支付方式</li>
          <li>送货政策</li>
        </ul>
        <ul class="list-none">
          <li class="mb10">服务支持</li>
          <li>官方开源</li>
          <li>项目前端</li>
          <li>项目后端</li>
        </ul>
        <ul class="list-none">
          <li class="mb10">自助服务</li>
          <li>个人博客</li>
          <li>个人简介</li>
          <li>个人视频</li>
        </ul>
        <ul class="list-none">
          <li class="mb10">其他项目</li>
          <li>XPay支付系统</li>
          <li>数据共享</li>
          <li>待开发</li>
        </ul>
        <ul class="list-none">
          <li class="mb10">友情链接</li>
          <li>宇cccc</li>
          <li>Smartisan</li>
          <li>Vue</li>
        </ul>
        <ul class="list-none">
          <li class="mb10">关注我吧</li>
          <li>腾讯QQ</li>
          <li>新浪微博</li>
          <li>官方邮箱</li>
        </ul>
      </div>
      <div class="right">
        <div class="rbox">
          <div class="fs20 m10">1012139570</div>
          <div class="fs12 cg pd2">周一至周日 10:00-23:00(限Starrer或者捐赠人联系)</div>
          <div ><Button class="mt10">在线帮助</Button></div>
        </div>
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
<style lang="scss">
.foot {
  width: 80%;
  height: 350px;
  border: 1px solid black;
  margin: 60px 0;
  padding: 50px 0px 20px;
  .footbox {
    flex: 1;
    height: 200px;
    border: 1px solid red;
    .left {
      flex: 6;
      border: 1px solid gold;
      ul {
        padding: 20px 0 0 70px;
      }
      ul > li {
        padding: 2px 0;
        color: rgba(65, 63, 63, 0.8);
      }
    }
    .right {
      flex: 2;
      border: 1px solid rgb(53, 53, 51);
    }
    .rbox{
         padding: 20px;
    }
  }
}
</style>
