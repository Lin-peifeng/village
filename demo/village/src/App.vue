<template>
  <div id="app" class="app">
    <!-- <HeaderNav /> -->
    <main class="main">
      <div class="wrapper">
         <div class="content">
          <router-view />
        </div>
        <div class="side">
           <VillageList />
        </div>
		<div class="side-vir"></div>
      </div>
    </main>
    
  </div>
</template>
<script>
import HeaderNav from '@/components/HeaderNav.vue'
import VillageList from '@/components/VillageList'

export default {
  components:{
    HeaderNav,
    VillageList
  },
  
}
</script>


<style lang="scss">
.main {
  width: 960px;
  margin: 38px auto 0;
  .wrapper {
    width:100%;
    min-height: 900px;
    display: flex;
    justify-content: space-around;
    .content {
      flex: 1;
    }
	.side {
		width: 192px;
		margin-right: 30px;
		padding-top: 12px;
	}
  }
}
</style>
