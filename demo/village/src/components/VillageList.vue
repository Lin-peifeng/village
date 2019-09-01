<template>
    <div class="list">
        <div  v-for="item in villageList" :key="item.area_id">
             <VillageIcont :name="item.area_name" :id="item.area_id"/>
        </div>
    </div>
</template>
<script>
import VillageIcont from '@/components/VillageIcont.vue'
import Resource from '@/http/resources'
export default {
    name:'VillageList',
    data() {
        return {
            villageList:[]
        }
    },
    created() {
        Resource.Areas.save({
            parent_id: 440513110000
        }).then(({data})=>{
            this.villageList = data
        })
    },
    components:{
        VillageIcont
    }
}
</script>
<style lang="scss" scoped>
.list {
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
}
</style>
