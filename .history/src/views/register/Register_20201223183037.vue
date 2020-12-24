<template>
  <div class="all">
    <div class="allbox">
      <div class="loginbox">
        <div class="titie"></div>
        <div class="tit-text t-center">使用 XMall 账号 登录官网</div>
        <!---表单验证--->
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" inline>
          <!---账号--->
          <FormItem prop="username" class="input">
            <Input
              type="text"
              v-model="formCustom.username"
              placeholder="账号"
              size="large"
            />
          </FormItem>
          <br />
          <!---密码--->
          <FormItem prop="password" class="input">
            <Input
              type="password"
              v-model="formCustom.password"
              placeholder="密码"
              size="large"
            />
          </FormItem>
          <br />
          <!---重复密码--->

          <FormItem prop="passwdCheck" class="input">
            <Input
              type="password"
              v-model="formCustom.passwdCheck"
              placeholder="重复密码"
              size="large"
            />
          </FormItem>

          <!---复选框--->
          <div class="single mt20">
            <Checkbox v-model="single" class="single c179 fs16 ml50 mt30"
              >我已阅读并同意遵守</Checkbox
            >
            <span class="ml70"><a href="#">法律声明</a></span
            >|
            <span><a href="#">隐私条款</a></span>
          </div>
          <!---注册按钮--->
          <FormItem>
            <div>
              <Button
                type="primary"
                size="large"
                class="btn"
                @click="handleSubmit('formCustom')"
                >注册</Button
              >
            </div>
            <div class="bbs209 ml50 mt20"></div>
            <!---跳转登录--->
            <div class="c179 fs14 ml50 mt10">
              如果您已拥有 XMall 账号，则可在此
              <span @click="goLogin"><a>登陆</a></span>
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
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入你的密码"));
      } else {
        if (value !== this.formCustom.password) {
          // 对第二个密码框单独验证
          callback(new Error("两次密码不一致，请再次输入"));
        }
        callback();
      };
    };
   

    return {
      single: false,
      formCustom: {
        username: "",
        password: "",
        passwdCheck: "", //重复密码
      },
      ruleCustom: {
        username: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能低于6位",
            trigger: "blur",
          },
        ],
         passwdCheck: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
      },
    };
  },
  components: {},
  methods: {
    // 全局判断
    handleSubmit(name) {
       
      this.$refs[name].validate((valid) => {
        if (valid) {
        //   注册
          this.$api
            .register(
              this.formCustom
            )
            .then((res) => {
              console.log(res);
              if (res === 200) {
                  this.$Message.success(res.message);
                localStorage.setItem(
                  "user",
                  JSON.stringify(
                   this.formCustom
                  )
                );  
              }else if(res === 500){
                this.$Message.error(res.message);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.$Message.error("注册失败!");
        }
      });
    },

    goLogin() {
      this.$router.push("/login");
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
.btn {
  width: 350px;
  height: 50px;
  margin-top: 10px;
  margin-left: 50px;
  margin-bottom: 10px;
}
.single {
  margin-top: -3px;
}
</style>
