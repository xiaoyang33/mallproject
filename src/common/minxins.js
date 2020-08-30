
import {debounce } from '../common/utils'
import BackTop from '../components/context/backTop/BackTop.vue'
export const itemImgLoad = {
  data(){
    return {
      itemImgLoad:null,
      refresh:null
    }
  },
  mounted(){
      this.refresh = debounce(this.$refs.scroll.refresh,20)
      this.itemImgLoad = ()=>{
      this.refresh()
    }
    this.$bus.$on('ImageLoad',this.itemImgLoad)
  }
}

