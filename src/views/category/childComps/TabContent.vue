<template>
  <div>
    <ul>
      <li v-for="item in cateContentInfo" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    cateContentInfo:{
      type:Array,
    }
  },
  methods:{
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
ul{
  display: flex;
  flex-wrap: wrap;
}
ul li{
  width: 33%;
  text-align: center;
}
ul li img{
  width: 70%;
}
ul li p {
  font-size: 12px;
}
</style>