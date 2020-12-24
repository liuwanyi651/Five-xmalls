<template>
    <div class="all">
        <div class="allbox">
            <div class="loginbox"></div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
  name: '',
  props:{},
  data () {
    return {   
      
    }
  },
  components: {},
  methods: {
      
  },
  mounted() {                  
       
  },
  computed: {
      
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.all{
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(246,246,246);
  display: flex;
  flex-direction: column;
}
.allbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.loginbox {
    padding: 100px;
    width: 452px;
    height: 673px;
    background: white;
    border: 1px solid #ccc;
    border-radius:20px ;
}
</style>