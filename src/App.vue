<template>
  <div class="todoapp">
    <tou @create="createfn"></tou>
    <shen :arr="showlist"  @delete="delfn"></shen>
    <wei  :arr="list" :num="num"  @changed="changedfn"></wei>
  </div>
</template>

<script>
import tou from "./components/tou.vue"
import shen from "./components/shen.vue"
import wei from "./components/wei.vue"



export default{

 components:{
    tou,
    shen,
    wei,
  },

   data(){
      return{

        list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 102, name: "睡觉", isDone: false },
        { id: 103, name: "打豆豆", isDone: true },
      ],

      getstr:"all"

      }
   },


   methods: {
    createfn(taskname){
      let id=this.list.length==0 ? 100 :this.list[this.list.length-1].id+1 

       this.list.push({
         id:id,/*函数体内局部作用域定义的变量不用this.获取*/
         name:taskname,
         isDone:false
       })      
      //  console.log("传过来的参数是:"+taskname)
      //  console.log(this.list)
    },
 
     delfn(theid){
       let index=this.list.findIndex(obj=>{
        return obj.id===theid
       })

       this.list.splice(index,1)
     },

  changedfn(str){
    this.getstr=str
  }

   },

   computed:{

    num(){
      let k=0
      this.list.forEach(obj=>{
        if(obj.isDone===false)
          k++
      })
      
      // console.log(k)
      return k
    },

  showlist(){

    if(this.getstr==="yes"){
      return this.list.filter(obj=>obj.isDone===true)
        }else if(this.getstr==="no"){
         return this.list.filter(obj=>
        obj.isDone===false
      )
      }else{
        return this.list
      }
    
  }
 

   }
   

 
}

</script>
