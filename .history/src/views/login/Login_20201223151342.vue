<template>
  <div class="all">
    <div class="allbox">
      <div class="loginbox">
        <div class="titie"></div>
        <div class="tit-text t-center">使用 XMall 账号 登录官网</div>
        <!--表单验证---->
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user" class="input">
            <Input type="text" v-model="formInline.user" placeholder="Username" size="large"/>
          </FormItem>
          <br>
          <FormItem prop="password" class="input">
            <Input type="password" v-model="formInline.password" placeholder="Password" size="large"/>
          </FormItem>
          <div  class="single">
            <Checkbox v-model="single" class="single c179 fs16 ml50 ">记住密码</Checkbox>
            <span class="ml85"><a href="#">注册 XMall 账号</a>|</span>
            <span><a href="#">忘记密码？</a></span>
          </div>
          <FormItem>
            <div>
            <Button type="primary" size="large" class="btn" @click="handleSubmit('formInline')">登录</Button>
            </div>
            <div>
            <Button type="default"  class="btn" @click="handleSubmit('formInline')">返回</Button>
            </div>
            <div class="bbs209 ml50 mt20">
            </div>
            <div class="c179 fs14 ml50 mt10">其他账号登录 ：
            <i class="iconfont icon-weixin icon"></i>
            <i class="iconfont icon-weibo icon"></i>
            <i class="iconfont icon-qq1 icon"></i>
            </div>
          </FormItem>
        </Form>
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
    return {
      single: false,
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
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
  height: 128px;
  background-image: url(http://xmall.exrick.cn/static/images/smartisan_4ada7fecea.png);
  background-repeat: no-repeat;
  background-position: top;
  margin: 30px 0 30px;
}
.tit-text {
  color: #333;
  font-size: 20px;
  margin: 10px 0 30px;
}
.input {
  width: 350px;
  margin-left: 50px;
}
.btn{
  width: 350px;
  height: 50px;
  margin-top: 10px;
  margin-left: 50px;
  margin-bottom: 10px;
}
.iconfont.icon{
  font-size: 18px;
  margin-left: 5px;
}
.single{
  margin-top: -10px;
}
</style>
