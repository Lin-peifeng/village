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
                    title:"不可或缺的 Bash 别名",
                    content:"以下是十大 Bash 别名，一旦你试过它们，你会发现再也不能离开它们 ... 例如，虽然你可能很难在 Bash 中找到项目的顶级目录（就 Bash 而言，它是一个完全随意的名称，因为计算机的绝对顶级是根目录），但 Git 可以通过简单的查询找到项目的顶级目录 ... 开始使用简单的"
                },
                {
                    id:2,
                    title:"Debian 10（Buster）安装后要做的前 8 件事",
                    content:"Debian 10 的代号是 Buster，它是来自 Debian 家族的最新 LTS 发布版本，并包含大量的特色功能 ... 对于还没有安装 Debian 10 的人们，请阅读这篇指南 图解 Debian 10 (Buster) 安装步骤 ... 在设置完成 Debian 10 后，你需要做的第一件事是安装 sudo 软件包，因为它能够"
                }
            ]
        }
    },
    components:{
        Item
    }
}
</script>