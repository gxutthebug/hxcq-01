import axios from 'axios'
export default{
    namespaced: true,
    state: {
        allData: {}
    },
    getters: {
        
    },
    mutations: {
        updateList(state,{currentCatagtory, list }){

             state.allData={...state.allData, [currentCatagtory]: list }
        }
    },
    actions: {
        async getNewList (context, cataId){
        const { data: { data: { results } } } =await axios({
            url:"http://geek.itheima.net/v1_0/articles",
            params:{channel_id:cataId,timestamp:1654835148606}
        })
        console.log(results)
        console.log("触发了一次")
        context.commit("updateList",{currentCatagtory:cataId,list:results })
        }
    },
}