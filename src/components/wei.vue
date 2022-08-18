<template>
   <footer class="footer">
    <span class="todo-count">待完成任务数<strong>{{num}}</strong></span>
    <ul class="filters"  @click="changefn">
      <li>          
        <a    :class="{selected: pdstr ==='all'}"  href="javascript:;"   @click="pdstr='all'"> 全部</a>
        <!-- 双引号内必须用单引号  -->
      </li>
      <li>
        <a   href="javascript:;" :class="{selected: pdstr ==='no'}"   @click="pdstr='no'">未完成</a>
      </li>
      <li>
        <a  href="javascript:;"  :class="{selected: pdstr ==='yes'}"   @click="pdstr='yes'">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" >清除已完成</button>
  </footer>

</template>

<script>
export default {
  props:["arr","num"],

  data() {
    return {
      pdstr:"all"
    }
  },

  methods: {
    changefn(){
       this.$emit("changed",this.pdstr)
    }
  },
}
</script>


