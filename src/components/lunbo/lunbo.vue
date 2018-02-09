<template>
	<div id="lunbo" ref="imgwidth">
		<h1>响应式无缝滚动轮播组件：</h1>
		<div class="lunboImg" :style="{transform:'translate3d('+a+'%,0,0)',height:lunboHeight+'px',transitionDuration:transitionDuration+'s'}">
			<ul class="clear" :style="{width:lunboUlWidth}">
				<li :style="{backgroundImage:'url('+imgLast+')',width:lunboLiWidth}"></li>
				<li v-for="(val,index) in imgs"  :style="{backgroundImage:'url('+val.imgurl+')',width:lunboLiWidth}" @click="bannerClick(val.url)" :class="{'active':index === nowSlider}"></li>
				<li :style="{backgroundImage:'url('+imgFirst+')',width:lunboLiWidth}"></li>
			</ul>
		</div>
		<div class="arrow">
			<button class="left" @click="direction('left')" :disabled="buttoning"></button>
			<button class="right" @click="direction('right',$event)"  :disabled="buttoning" ></button>
		</div>
		<div class="icon">
			<ul class="clear">
				<li v-for="(val,index) in imgs" @click="direction('center',index)" :class="{'active':index === nowSlider}"><!--{{index+1}}--></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		/*
		传值举例：
		imgs:[
	      	{
	      		url:"http://www.baidu.com",
	  			imgurl:"http://www.itdongle.com/liwenhao/vue/img/11.jpg"
	  		},
	  		{
	  			imgurl:"http://www.itdongle.com/liwenhao/vue/img/22.jpg"
	  		},
	    ]
	    height:400
	    */
		props:['imgs','height'],
		data(){
		    return {
		    	/*初始化transform*/
		      	a:-100,
		      	/*响应式可控宽高*/
		      	lunboHeight:'',
		      	lunboUlWidth:'',
		      	lunboLiWidth:'',
		      	/*第一张图跟最后一张图*/
		      	imgFirst:'',
		      	imgLast:'',
		      	/*初始数值*/
		      	nowSlider: 0,
		      	/*控制按钮disabled*/
		      	buttoning:false,
		      	/*动画时间*/
		      	transitionDuration: 0.4,
		    }
		},
		methods:{
			direction(direct,index){
				let _this = this;
				let imgNum = _this.imgs.length;
				if(direct == 'left'){
					this.nowSlider--;//设置固定数值
					this.transitionDuration = 0.4;//设置滚动动画
					_this.a += 100;//设置滚动距离
					_this.buttoning = true;//阻止button连续点击
					setTimeout(() => {
						_this.buttoning = false;
					}, 400)
					if(_this.a == 0){//如果滚动到第一张图，滚动动画为0，初始化固定数值跟滚动距离
						this.nowSlider = imgNum-1;
						_this.a == 0;
						setTimeout(() => {
							this.transitionDuration = 0;
							_this.a = -(imgNum)*100;
						}, 400)
					}
				}else if(direct == 'right'){
					this.nowSlider++;
					this.transitionDuration = 0.4;
					_this.a -= 100;
					_this.buttoning = true;
					setTimeout(() => {
						_this.buttoning = false;
					}, 400)
					if(_this.a == -(imgNum+1)*100){
						
						this.nowSlider = 0;
						_this.a = -(imgNum+1)*100;
						setTimeout(() => {
							this.transitionDuration = 0;
							_this.a = -100;
						}, 400)
						
					}
				}else if(direct == 'center'){
					this.transitionDuration = 0.4;
					//console.log(index)
					_this.a = -(100*(index+1));
					this.nowSlider = index;
				}
			},
			bannerClick(index){
				//console.log(index);
				if(index == undefined || index == ""){
					return false;
				}else{
					window.open(index);
				}
			}
		},
		mounted(){
			/*此时获取到dom元素，修改data可以影响dom，*/
		},
		created(){
			/*此时获取不到dom元素，修改data可以影响dom，*/
			this.lunboHeight = this.height;
			this.lunboUlWidth = (this.imgs.length+2)*100+"%";
			this.lunboLiWidth = 100/(this.imgs.length+2)+"%";
			this.imgFirst = this.imgs[0].imgurl;
			this.imgLast = this.imgs[this.imgs.length-1].imgurl;
		}
	}
</script>

<style scoped type="text/css" lang="scss">
	#lunbo{
		position:relative;
		overflow:hidden;
		.lunboImg{
			width:100%;
			transition-property: transform,left,top;
			transition-timing-function: ease;
			ul{
				height:100%;
				li{
					float:left;
					height:100%;
					background-repeat:no-repeat;
					background-size:100% 100%;
					background-position: center;
					background-size:cover;
				}
			}
		}
		.arrow{
			.left{
				border:1px solid #FFFFCC;
				border-radius:50%;
				position:absolute;
				top:50%;
				transform: translateY(-50%);
				left:0;
				width:50px;
				height:50px;
				background:url(~assets/img/zuo.png) no-repeat #FFFFFF;
				transform: rotate(-180deg);
				-webkit-transform: rotate(-180deg);
				background-size:100% 100%;
				&:hover{
					cursor:pointer;
				}
				&:active{
					opacity:0.6;
				}
			}
			.right{
				border:1px solid #FFFFCC;
				border-radius:50%;
				position:absolute;
				top:50%;
				transform: translateY(-50%);
				right:0;
				width:50px;
				height:50px;
				background:url(~assets/img/zuo.png) no-repeat #FFFFFF;
				background-size:100% 100%;
				&.isred{
					background:red !important;
				}
				&:hover{
					cursor:pointer;
				}
				&:active{
					opacity:0.6;
				}
			}
		}
		.icon{
			position: absolute;
		    bottom: 5px;
		    left: 50%;
		    ul{
		    	li{
		    		float:left;
		    		width:10px;
		    		height:10px;
		    		border-radius:50%;
		    		line-height: 30px;
		    		text-align: center;
		    		background: rgba(0,0,0,.4);
				    box-shadow: 0px 0px 2px 2px rgba(255,255,255,.6);
				    padding: 1px;
				    margin-right: 10px;
		    		&.active{
		    			background: deeppink;
		    			color:white
		    		}
		    		&:hover{
		    			background:red;
		    			cursor:pointer;
		    		}
		    	}
		    }
		}
	}
	
</style>