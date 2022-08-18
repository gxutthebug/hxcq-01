<template>
    <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li v-for="obj in arr" :key="obj.id "  :class="{completed:obj.isDone}">
      <div class="view">
        <input class="toggle" type="checkbox"  v-model="obj.isDone" />
        <label>{{obj.name}}</label>
        <button class="destroy"  @click="delfn2(obj.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
props:["arr"],

methods: {
  delfn2(id){
      this.$emit("delete" ,id)//也可以用引用类型的特性直接在这里改this.arr，这样也会同步影响到外面的list
  }
},
}
</script>


