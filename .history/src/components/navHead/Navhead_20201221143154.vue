<template>
  <div class="felx ">
    <div class="left">
      <div class="round bgc-w">
      </div>
    </div>
    <div class="right"></div>
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
.left{
  width: 45%;
  .round{
    width: 30px;;
    height: 30px;
    border-radius:50%;
    
  }
}
.right{
  width: 55%;
}
</style>