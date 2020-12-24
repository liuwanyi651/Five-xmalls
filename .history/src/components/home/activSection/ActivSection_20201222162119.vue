<template>
  <div>
    <div class="pic brs_E" v-for="(item, index) in activSectionTwo" :key="index">
        <img :src="item.picUrl" alt="" />
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    list:
    {
      type:Array,
      required:true
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