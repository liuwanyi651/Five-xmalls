<template>
  <div class="wholebox flex ">
    <div v-for="(item,index) in arr" :key="index" class="flex">
      <div class="name fs12 c179" :class="{active : falg===index}" @click="go">{{item.name}}</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      flag:0  ,
      arr:[
        {
          name:"综合排序"
        },
        {
          name:"价格从低到高"
        },
        {
          name:"价格从高到低"
        }
      ]
    }
  },
  components: {},
  methods: {
    go(){
      this.flag 
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.wholebox{
  width: 1280px;
  border: 1px solid black;
}
.name{
  padding: 10px;
}
.name:hover{
  cursor:pointer ;
  color: rgb(55, 119, 214);
  font-weight: bold;
}
.active{
   color: rgb(55, 119, 214);
}
</style>