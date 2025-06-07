<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0 0 0px","background":"url() fixed,#ffffff","height":"auto"}'>
		<swiper :style='{"padding":"0px 0 0px ","boxShadow":"inset 0px 0px 0px 0px #f4ead8","borderColor":"#87acf1","outline":"0px solid #bbb","margin":"0 auto 24rpx","borderRadius":"0","background":"rgba(255,255,255,1)","borderWidth":"0 12rpx 2rpx 12rpx","width":"calc(100% - 40rpx)","borderStyle":"solid","height":"396rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"calc(100% - 0px)","margin":"0 auto","position":"relative","borderRadius":"24rpx","background":"none","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"calc(100% - 40rpx)","margin":"16rpx auto","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"padding":"0 20rpx 32rpx","color":"#333","left":"20rpx","textAlign":"center","background":"rgba(255,255,255,.6)","bottom":"0px","width":"calc(100% - 40rpx)","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"20rpx 0 20rpx","boxShadow":"inset 0px 0px 112rpx 0px #87acf1","margin":"24rpx auto 60rpx","borderColor":"#87acf1","display":"flex","outline":"0px solid #ccc","borderRadius":"20%","flexWrap":"wrap","background":"rgba(255,255,255,1)","borderWidth":"2rpx 16rpx 2rpx 16rpx","width":"calc(100% - 40rpx)","borderStyle":"solid","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"25%","padding":"12rpx 0","margin":"10rpx 0","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0","margin":"0px auto","color":"#333","borderRadius":"100%","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		
		<!-- 关于我们 -->
		<view :style='{"padding":"0px 24rpx 0px","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0px auto 40rpx","borderRadius":"0px","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 0px)","position":"relative","justifyContent":"center","height":"auto"}'>
		  <view :style='{"padding":"0 40rpx","margin":"0","overflow":"hidden","color":"#fff","borderRadius":"0px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221221/198d7f52a42244f0ae6e343fed9e050d.png) no-repeat right top,#5489ed","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","height":"80rpx"}'>{{aboutUsDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0px 0 0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221221/8a09e68b98bb483ab8189ccceccc7b2e.png) no-repeat right top / auto 100%,#5489ed","display":"block","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{aboutUsDetail.subtitle}}</view>
		  <view :style='{"border":"0px double #ffeeba","padding":"0px","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"-220rpx 0 0 0px","display":"flex","float":"right","justifyContent":"space-between","borderRadius":"0","flexWrap":"wrap","background":"none","width":"90%","height":"auto","order":"1"}'>
		    <img :style='{"padding":"0px","boxShadow":"inset 0px 0px 112rpx 0px #fff","margin":"0","borderColor":"#e9be70","objectFit":"cover","borderRadius":"16rpx","borderWidth":"0px","display":"inline-block","width":"48%","borderStyle":"solid","height":"200rpx"}' v-if="aboutUsDetail.picture1" :src="baseUrl+aboutUsDetail.picture1">
		    <img :style='{"border":"0px dotted #f7de91","padding":"0px","margin":"0px","objectFit":"cover","borderRadius":"16rpx","display":"block","width":"48%","height":"200rpx"}' v-if="aboutUsDetail.picture2" :src="baseUrl+aboutUsDetail.picture2">
		    <img :style='{"width":"48%","margin":"0px","objectFit":"cover","borderRadius":"16rpx","display":"none","height":"160rpx"}' v-if="aboutUsDetail.picture3" :src="baseUrl+aboutUsDetail.picture3">
		  </view>
		  <view :style='{"padding":"16rpx 40rpx 240rpx","boxShadow":"inset 0px 0px 0px 0px #f4ead8","margin":"48rpx 0px 0 0","borderColor":"#e9be70","color":"rgb(102, 102, 102)","textIndent":"2em","float":"left","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20221221/39114631d5f448cda8207eca54357de9.png) no-repeat center top / 100% 100%","borderWidth":"0px","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid","height":"auto"}' v-html="aboutUsDetail.content"></view>
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 商品推荐 -->
		<!-- 商品推荐 -->
		
		<!-- 系统简介 -->
		<view :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,.2)","margin":"40rpx auto 40rpx","borderRadius":"24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","justifyContent":"center","height":"auto"}'>
		  <view :style='{"padding":"0 40rpx","margin":"0","overflow":"hidden","color":"#fff","borderRadius":"0px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221221/198d7f52a42244f0ae6e343fed9e050d.png) no-repeat right top,#5489ed","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","height":"80rpx"}'>{{systemIntroductionDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221221/8a09e68b98bb483ab8189ccceccc7b2e.png) no-repeat right top / auto 100%,#5489ed","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{systemIntroductionDetail.subtitle}}</view>
		  <view :style='{"padding":"0px","margin":"60rpx 0 0 0","background":"none","display":"flex","width":"100%","position":"relative","justifyContent":"center","height":"auto"}'>
		    <img :style='{"padding":"24rpx","boxShadow":"inset 0px 0px 64rpx 0px #edf3fe","margin":"0","borderColor":"#8badef","objectFit":"cover","borderRadius":"24rpx 0 0 24rpx","borderWidth":"8rpx 2rpx 2rpx 2rpx","display":"block","width":"48%","borderStyle":"solid","height":"240rpx"}' v-if="systemIntroductionDetail.picture1" :src="baseUrl+systemIntroductionDetail.picture1">
		    <img :style='{"padding":"24rpx","boxShadow":"inset 0px 0px 64rpx 0px #edf3fe","margin":"0","borderColor":"#8badef","objectFit":"cover","borderRadius":"0 24rpx 24rpx 0","borderWidth":"2rpx 2rpx 8rpx 4rpx","display":"block","width":"48%","borderStyle":"solid","height":"240rpx"}' v-if="systemIntroductionDetail.picture2" :src="baseUrl+systemIntroductionDetail.picture2">
		    <img :style='{"padding":"24rpx","boxShadow":"inset 0px 0px 112rpx 0px #fff","margin":"0","borderColor":"#e9be70","objectFit":"cover","display":"none","right":"12rpx","borderRadius":"10%","borderWidth":"8rpx 4rpx 4rpx 4rpx","width":"30%","position":"absolute","borderStyle":"solid","height":"400rpx"}' v-if="systemIntroductionDetail.picture3" :src="baseUrl+systemIntroductionDetail.picture3">
		  </view>
		  <view :style='{"border":"4rpx dotted #f7de91","padding":"32rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #87acf1","margin":"40rpx 0 20rpx 0","borderColor":"#87acf1","color":"#333","textIndent":"2em","minHeight":"336rpx","borderRadius":"24rpx","background":"url(http://codegen.caihongy.cn/20221221/b0090511ebb8453898dc32870d4b5bbd.png) no-repeat center top / 100% 100%,rgba(255,255,255,1)","borderWidth":"0px 0px 0px 0px","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid"}' v-html="systemIntroductionDetail.content"></view>
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 新闻资讯 -->
																																														<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0px 0","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0 auto 40rpx","overflow":"hidden","borderRadius":"0","background":"#9cb7e9","display":"flex","width":"calc(100% - 40rpx)","lineHeight":"80rpx","justifyContent":"space-between","height":"80rpx"}'>
				<view :style='{"padding":"0 48rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px 0 0","color":"#fff","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221221/6e35fb6d0812410dbf9f5d813dcf1ce2.png) no-repeat right top / auto 100%,#5489ed","display":"inline-block","width":"auto","fontSize":"32rpx","lineHeight":"80rpx","minWidth":"240rpx","height":"80rpx"}'>公告信息</view>
				<text :style='{"padding":"0 40rpx","margin":"0px 0px 0 0","fontSize":"28rpx","color":"#fff","background":"none"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
					  
						
						
		  <!-- 样式4 -->
		  		  
		  <!-- 样式5 -->
		  		  
		  <!-- 样式6 -->
		  		  <view class="news-box3" :style='{"width":"100%","padding":"0px 24rpx 24rpx","margin":"0 0 80rpx","height":"auto"}'>
			<view @tap="onNewsDetailTap(item.id)" v-for="(item,index) in news" :key="index" class="list-item" :style='{"padding":"8rpx 44rpx","margin":"0","borderColor":"#ddd","backgroundColor":"rgba(255,255,255,1)","borderRadius":"0","borderWidth":"0 0 2rpx 0","width":"100%","position":"relative","borderStyle":"solid","height":"auto"}'>
			  <view :style='{"padding":"0","boxShadow":"4rpx 4rpx 4rpx rgba(153,153,153,.6)","margin":"-4rpx 0 0 0","backgroundColor":"#5489ed","top":"50%","borderRadius":"0","left":"16rpx","width":"12rpx","position":"absolute","height":"12rpx"}' class="dian"></view>
			  <view :style='{"width":"100%","lineHeight":"72rpx","fontSize":"28rpx","color":"#333"}' class="title ">{{item.title}}</view>
			  <view class="cuIcon-right" :style='{"padding":"0","margin":"-36rpx 8rpx 0 0","top":"50%","color":"#999","width":"32rpx","lineHeight":"72rpx","fontSize":"32rpx","position":"absolute","right":"0"}'></view>
			</view>
		  </view>
		  		  
		  <!-- 样式7 -->
		  		  
		  <!-- 样式8 -->
		  		  
		  <!-- 样式9 -->
		  			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
														<!-- 新闻资讯 -->
				

		<!-- 商品列表 -->
																																																								<!-- 商品列表 -->
		
		

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                aboutUsDetail: {},
                systemIntroductionDetail: {},
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				news: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
        async onLoad(){
            this.role = uni.getStorageSync("role");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
            this.getAboutUs();
            this.getSystemIntroduction();
			// 公告信息
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list


		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
            async getAboutUs() {
                let res = await this.$api.info('aboutus', 1)
                this.aboutUsDetail = res.data;
            },
            async getSystemIntroduction() {
                let res = await this.$api.info('systemintro', 1)
                this.systemIntroductionDetail = res.data;
            },
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
            }
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
