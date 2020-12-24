<template>
    <div class="all">
        <div class="allbox">

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
.allbox{
  width: 400px;
  height: 600px;
  background-color: white;
  border-radius:25px;
  margin: 0 auto;
  justify-content: center;
  // align-items: center;
}
</style>