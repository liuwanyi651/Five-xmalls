<template>
    <div>
        <!-- 公共样式 -->
        <div class="header">
        <navTop></navTop>
    </div>
    <div class="container">
        <div class="aside">
            <div id="asd">
                <navFoot></navFoot>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>
<script>
import navTop from '../../components/navTop/Navtop'
import navFoot from '../../components/navFoot/Navfoot'
export default {
    name: '',
    props: {},
    components: {
        // 注册组件
        navTop,
        navFoot
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>
<style lang="scss">
  .header {
    width: 100%;
    height: 70px;
    background: rgb(40, 91, 134);
    
}



</style>