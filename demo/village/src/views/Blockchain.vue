<template>
    <div>
         <div v-for="item in TechArr" :key="item.id">
            <Item :item="item"/>
        </div>
    </div>
</template>
<script>
import Item from '@/components/ContentItem.vue'
export default {
    name: 'Tech',
    data() {
        return {
            TechArr:[
                {
                    id:1,
                    title:"Galaxy Digital 首席执行官：普通投资者应将其投资资金的 2%-3% 用于加密",
                    content:"据 CryptoGlobe 8 月 4 日消息，Galaxy Digital 首席执行官 Michael Novogratz 在接受采访被问及一个普通人应该把多少钱配置到比特币和其他加密资产上，Michael Novogratz 表示，普通投资者应该将其投资组合的 2% 到 3% 用于加密 ... 当被问及是否在贵金属或比特币上投"
                },
                {
                    id:2,
                    title:"MTF 项目方完成对 TSC100 交易所超级合伙人的 MTF 空投",
                    content:"据介绍，MTF 是新一代加密货币对冲基金，通过统计历史数据，找出各指标间的数学关系，发现市场上存在的微小获利机会，并通过杠杆比率进行快速而大规模的交易获利 ... MTF 的投资标的必须符合三个条件：在主流交易所交易、有足够的流动性、必须适合用数学模型来交易"
                },
                 {
                    id:3,
                    title:"对话真本聪：Nirvana Capital 的投资哲学",
                    content:"2019 年 8 月 3 日，真本聪和 WinKrypto 主办的 AMA 在真本聪社群举行，本次 AMA 邀请了Nirvana Capital 涅槃资本合伙人 Mable，她就区块链过去的热点、应用场景和未来赛道等问题进行了分享 ... 加密数字货币投资，我也对于探索新经济实验、艺术哲学和开源协作有比"
                },
                 {
                    id:4,
                    title:"DCE 能源链廖文敏：区块链新能源迎来入局好时机",
                    content:"DEC 能源链马来西亚国际区块链社区负责人廖文敏受邀坐客菲立宾 TechTalk 广播节目时称：马来西亚拟投资 50 亿马币建设引进新能源，这是国家战略层面的行为 ... 区块链在新能源领域更是商机无限，已有不少区块链新能源项目崭露头角，区块链新能源领域的竞争刚刚开始"
                },

            ]
        }
    },
    components:{
        Item
    }
}
</script>