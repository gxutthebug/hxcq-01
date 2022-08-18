<template>
   <div id="app">
      <Catagtory></Catagtory>
      <NewList></NewList>
    </div>
</template>

<script>
import Catagtory from './components/catagtory'
import NewList from './components/new-list'

export default {

  components:{
    Catagtory,
    NewList
},
  name: 'App',
 
}
</script>

<style>

</style>
