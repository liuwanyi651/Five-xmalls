<template>
  <div class="wholebox">
    <!---顶部标题---->
    <div class="top flex a-center">
      <div v-for="(item, index) in arr" :key="index" class="flex">
        <div
          class="name fs12 c179"
          :class="{ active: flag === index }"
          @click="go(item, index)"
        >
          {{ item.name }}
        </div>
      </div>
      <div>
        <Input v-model="value" placeholder="价格" style="width: 90px" class="ml20" /> -
        <Input v-model="value" placeholder="价格" style="width: 90px" />
      </div>
      <div class="ml20">
        <Button type="primary" style="width: 90px">确定</Button>
      </div>
    </div>
    <!---渲染数据---->
    <div>
    hhhhhh
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      flag: 0,
      value: "",
      arr: [
        {
          name: "综合排序",
        },
        {
          name: "价格从低到高",
        },
        {
          name: "价格从高到低",
        },
      ],
    };
  },
  components: {},
  methods: {
    go(a, b) {
      console.log(a);
      this.flag = b;
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.wholebox {
  width: 1280px;
  
.top{
border: 1px solid black;
}
}
.name {
  padding: 20px 10px;
}
.name:hover {
  cursor: pointer;
  color: rgb(55, 119, 214);
  font-weight: bold;
}
.active {
  color: rgb(55, 119, 214);
  font-weight: bold;
}
</style>
