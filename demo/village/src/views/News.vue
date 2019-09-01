<template>
    <div>
         <div v-for="item in newsArr" :key="item.id">
            <Item :item="item"/>
        </div>
    </div>
</template>
<script>
import Item from '@/components/ContentItem.vue'
export default {
    name: 'News',
    data() {
        return {
            newsArr:[
                {
                    id:1,
                    title:"在当下这个时间，高素质和高刷新率对于 OLED 似乎难以兼得",
                    content:"要说黑鲨 2 Pro 最大的遗憾，那肯定是没有上高刷新率屏幕，关于这点我也并没有洗地的意思，从雷蛇到 ROG Phone 到红魔，黑鲨可能是有点名气的游戏手机中唯一还没有高刷新率屏幕的品牌按照抢先搭载高刷新率的游戏手机来说，玩高帧率游戏算得上是一个杀手级的体验"
                },
                {
                    id:2,
                    title:"小米卢伟冰： 红米 Note 8 比隔壁强很多",
                    content:"今日午间，小米集团副总裁、红米 Redmi 品牌总经理 @卢伟冰 为「大魔王」开学套餐预热 ...有网友在其预热微博下询问「红米 Note 8 安排上了吗」，卢伟冰回复称「比隔壁强很多，放心」... 疑似暗示红米在 8 月份将举行新品的发布会且主角则很有可能是 Redmi Note 8 手机"
                }
            ]
        }
    },
    components:{
        Item
    }
}
</script>