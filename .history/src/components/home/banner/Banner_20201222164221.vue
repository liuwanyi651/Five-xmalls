<template>
     <Carousel autoplay v-model="value2" loop>
      <CarouselItem v-for="(item, index) in banner" :key="index">
        <div class="banbox">
          <img :src="item.picUrl" alt="" />
          <div class="imgb"><img :src="item.picUrl3" alt="" /></div>
          <div class="imgb"><img :src="item.picUrl2" alt="" /></div>
        </div>
      </CarouselItem>
    </Carousel>
</template>

<script>
export default {
  name: '',
  props:{
    banner:{
      type:Array, //子组件接收父组件传过来的数据
       required: true,
    }
  },
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

</style>