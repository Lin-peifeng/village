<template>
    <div class="infinite-list-wrapper" style="overflow:auto">
        <ul
            class="list"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled">
            <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
        </ul>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
  </div>
</template>
<script>
export default {
    name:"ContentItem",
    props: {
        item: {
            require: true,
            type: Object
        }
    },
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
}
</script>
<style lang="scss" scoped>
.item {
  position: relative;
  &::before {
    position: absolute;
    bottom:0;
    left:0;
    right: 0;
    content: '';
    border-bottom: 1px solid #dcdcdc;
  }
  .item-title {
    font-weight: 500;
    color: #333;
    font-size: 17px;
    line-height: 1.78em;
    padding-bottom: 8px;
    padding-top: 30px;
    cursor: pointer;
    position: relative;
    .title-content {
      margin-right: 15px;
      color:#333;
      cursor: pointer;
    }
  }
  .title-time {
    font-size: 14px;
    color: #999;
    font-weight: 400;
    display: inline-block;
    line-height: 1;
  }
  .item-content {
    position: relative;
    padding-bottom:20px;
    font-size: 15px;
    line-height: 1.8em;
    cursor: pointer;
  }
}
</style>
