<template>
  <div class="box">
    <div class="left flex a-center ">
      <div class="round bgc-w">
        <div class="text cb fw-b t-center">M</div>
      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
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

<style lang="scss" scoped>
.box{
  width: 80%;
  background-color: burlywood;
  justify-content: center;
  align-items: center;
}
.left{
  width: 40%;
  background-color: cadetblue;
  .round{
    width: 48px;;
    height: 48px;
    border-radius:50%;
    margin: 26px;
    .text{
    font-size: 25px;
    line-height: 48px;
    }
  }
}
.right{
  background-color: chartreuse;
  width: 60%;
}
</style>