<template>
    <div>
        
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
  methods: {
      getData() {
            //获取首页商品推荐
            this.$api.getRecommend().then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err)
            })
        },
  },
  mounted() {                  
       this.getData()
  },
  computed: {
      
  },
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>