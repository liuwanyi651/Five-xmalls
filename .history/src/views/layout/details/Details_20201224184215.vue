<template>
  <div>hahhah</div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      id:''
    }
  },
  components: {},
  methods: {
    getDetails(){
       this.id = this.$route.query.id 
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>