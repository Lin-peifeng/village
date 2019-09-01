<template>
    <div class="icont_box" :style="mergeStyle">
        {{name}}
    </div>
    
</template>

<script>
import randomcolor from 'randomcolor'
export default {
    name:"VillageIcont",
    data(){
        return {

        }
    },
    computed: {
        mergeStyle() {
            return {
                backgroundColor: randomcolor({
                    format: 'rgba',
                    opacity: 0.5
                })
            }
        }
    },
    props:{
        name:{
            require: true,
            type: String
        },
        id:{
            require: true,
            type: [String, Number]
        },
        
    }
}
</script>
<style lang="scss" scoped>
.icont_box {
    border-radius: 4px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #fff;
    color: #fff;
    box-sizing: border-box;
    margin-bottom: 12px;
    text-align: center;
    font-weight: 300;
    cursor: pointer;
    &:hover {
        background: #fff !important;
        color: #00182f;
    }
}
</style>
