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
    width: 400px;
    height: 600px;
    background: white;
    box-shadow: 4px 1px 1px 1px rgb(201, 199, 199);
    border-radius:20px ;
}
</style>