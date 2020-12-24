<template>
<div class="box">
    <ul v-for="(item,index) in arr" :key="index" >
        <li>{{item.name}}</li>
    </ul>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            arr:[
                {
                    name:"首页",
                    path:" "
                },
                {
                    name:"全部",
                    path:" "
                },
                {
                    name:"品牌周边",
                    path:" "
                },
                {
                    name:"捐赠名单",
                    path:" "
                },
                {
                    name:"后台管理系统",
                    path:" "
                },
                {
                    name:"XPay支付系统",
                    path:" "
                },
                {
                    name:"XBoot开发平台",
                    path:" "
                },
                {
                    name:"宣传视频",
                    path:" "
                },
                {
                    name:"Github",
                    path:" "
                },
                {
                    name:"商用授权",
                    path:" "
                },
                
            ]
        }
    },
    components: {},
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss">
.box{
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  li{
      padding:20px;
  }
}
</style>
