<template>
    <div class="header">
        <div class="nav">
            <img src="../assets/logo.png" alt="">
            <div>
                <router-link to="/" active-class="active" exact>热门话题</router-link>
                <router-link to="/news" active-class="active" exact>科技动态</router-link>
                <router-link to="/tech" active-class="active" exact>开发者咨询</router-link>
                <router-link to="/blockchain" active-class="active" exact>区块域快讯</router-link>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'HeaderNav',
}
</script>
<style lang="scss">
.header {
    position: relative;
    .nav {
        height:60px;
        width: 960px;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        padding-left: 22px;
        margin: 0 auto;
        .active {
            color:#fff;
        }
    }
    &::before {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        transform: scale(0.5);
        transform-origin: 0 0;
        width: 200%;
        border-bottom: 1px solid #ccc;
    }
    img {
        margin-right: 30px;
        height: 37px;
    }
    a {
        font-weight: bold;
        text-decoration: none;
        font-size: 16px;
        margin-right: 40px;
        color: #999;
    }
}
</style>

