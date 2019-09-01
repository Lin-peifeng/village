
<template>
  <div class="home">
    <ul class="infinite-list">
      <li v-for="item in newList" class="infinite-list-item" :key="item.id"> 
        <!--标题-->
		<div class="profile-box">
			<div class="profile">
				<el-avatar :src="item.avatar"></el-avatar>
				<span class="nickname">{{item.nickname}}</span>
			</div>
			<span class="create-time">发布于{{item.create_date}}</span>
		</div>
		<!--内容-->
		<div class="feed ">
			<p class="feed-p">{{item.text}}</p>
			<div class="feed-images" :class="feedClass(item)">
				<img class="feed-content-image" v-for="(img, index) in item.image_urls" :key="index" :src="img" alt="">
			</div>
		</div>
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <!-- <el-backtop target=".infinite-list"></el-backtop> -->
  </div>
</template>

<script>
import Resource from '@/http/resources'
import utils from '../utils'
export default {
  name: 'home',
  data () {
      return {
        newList: [],
        page:1,
        loading:false,
        noMore:false
      }
    },
	created() {
		this.load()
	},
    methods: {
		feedClass(item) {
			return `feed-images-${item.image_urls.length}`
		},
		load () {
			this.loading = true
			Resource.Posts.get({
				areaId: 440513110000,
				page: this.page
			}).then(({data}) => {
				data.forEach((d) => {
					d.image_urls && (d.image_urls = d.image_urls.split(','))
					d.create_date = utils.formatTime(new Date(String(d.create_date)), 'hh:mm');
				})
				this.page += 1 
				this.loading = false
				this.newList = [...this.newList,...data]
			}).catch((error)=>{
				console.log(error)
			
			})
		}
    }

}
</script>

<style lang="scss" scoped> 
.profile-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.profile {
	display: flex;
	width: 50%;
	align-items: center;
	.nickname {
		margin-left: 10px;
	}
}
.feed-p {
	margin-bottom: 10px;
	color: #fff;
	font-size: 14px;
	font-weight: 300;
}
.infinite-list {
    height: 900px;
    padding: 0;
    margin: 0;
    list-style: none;
}
.infinite-list .infinite-list-item {
    padding: 10px;
    border-radius: 4px;
    background: #7b91a7;
    margin: 10px;
	color: #fff;
}
.create-time {
  margin-right: 10px;
  font-size: 12px;
  color: #eee;
}
.feed {
	line-height: 20px;
	padding: 10px 0;
}
.feed-images {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
}

.feed-content-image {
    min-width: 30%;
    max-height: 250px;
    display: block;
    margin-bottom: 7px;
}

.feed-images-1 .feed-content-image {
    width: 100%;
}

.feed-images-4 .feed-content-image, .feed-images-2 .feed-content-image {
    width: 49.5%;
    height: 280px;
}

.feed-images-4 .feed-content-image:nth-child(odd) {
    margin-right: 1%;
}

/* .feed-images-4 .feed-content-image:first-child, */

.feed-images-2 .feed-content-image:first-child {
    margin-right: 3px;
}

.feed-images-8 .feed-content-image, .feed-images-5 .feed-content-image,
.feed-images-7 .feed-content-image, .feed-images-9 .feed-content-image,
.feed-images-6 .feed-content-image, .feed-images-3 .feed-content-image {
    width: 32.666%;
    height: 210px;
}

.feed-images-9 .feed-content-image:nth-child(-n+8):not(:nth-child(6)):not(:nth-child(3)),
.feed-images-6 .feed-content-image:nth-child(-n+5):not(:nth-child(3)),
.feed-images-8 .feed-content-image:nth-child(-n+7):not(:nth-child(3)):not(:nth-child(6)),
.feed-images-5 .feed-content-image:nth-child(-n+4):not(:nth-child(3)),
.feed-images-7 .feed-content-image:nth-child(-n+5):not(:nth-child(3)),
.feed-images-3 .feed-content-image:nth-child(-n+2) {
    margin-right: 3px;
}
</style>


