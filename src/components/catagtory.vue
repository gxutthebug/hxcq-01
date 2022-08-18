<template>
    <ul class="catagtory">
       <li :class="{ select: currentCatagtory === item.id }" v-for="item in catagtory"  :key="item.id"  
         @click="ckfn(item.id)">{{ item.name }}</li>
      </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['catagtory', 'currentCatagtory'])
  },
  methods: {
    ckfn(theid){
        this.$store.commit("catagtory/updateCurrentCatagtory",theid)
    }
  },
  created () {
    // 调用子模块的actions
    this.$store.dispatch('catagtory/getCatagtory')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
