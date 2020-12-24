<template>
  <div class="all">
    <div class="allbox">
      <div class="loginbox">
        <div class="titie"></div>
        <div class="tit-text t-center">使用 XMall 账号 登录官网</div>
        <!--表单验证---->
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
         
          class="form"
        >
          <FormItem prop="name">
            <Input v-model="formValidate.name" placeholder="账号" class="input"/>
          </FormItem>
          <FormItem prop="password">
            <Input v-model="formValidate.mail" placeholder="密码" />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px"
              >Reset</Button
            >
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
      formValidate: {
        name: "",
        password: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "The name cannot be empty", trigger: "blur" }],
        password: [
          { required: true, message: "Mailbox cannot be empty", trigger: "blur" },
          { type: "email", message: "Incorrect email format", trigger: "blur" },
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
    handleReset(name) {
      this.$refs[name].resetFields();
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
.input{
  width: 300px;
}
</style>
