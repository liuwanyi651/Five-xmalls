<template>
<div class="foot flex">
    <div class="footbox flex">
        <div class="left" >

        </div>
        <div class="right"></div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            
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
.foot {
  width: 80%;
  justify-content: center;
  align-items: center;
  height: 190px;
  border: 1px solid black;
  margin: 60px 0;
  padding: 50px 0px 20px;
  .footbox{
    flex: 1;
    height: 100px;
    padding: 50px 0px 130px; 
    border: 1px solid red; 
    .left{
        flex: 6;
        height:80px;
        padding: 10px 0px;
        border: 1px solid gold;
    }
  }
}
</style>
