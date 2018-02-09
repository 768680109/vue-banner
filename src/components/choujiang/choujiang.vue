<template>
	<div class="draw" id="choujiang">
		<table>
			<tr>
				<td class="item choujiang-unit choujiang-unit-0" :class="choujiang.index==0?'active':''">
					<div class="img">
						<img src="./images/img1.png" alt="">
					</div>
					<span class="name">500万人民币</span>
				</td>
				<td class="item choujiang-unit choujiang-unit-1" :class="choujiang.index==1?'active':''">
					<div class="img">
						<img src="./images/img2.png" alt="">
					</div>
					<span class="name">哈士奇</span>
				</td>
				<td class="item choujiang-unit choujiang-unit-2" :class="choujiang.index==2?'active':''">
					<div class="img">
						<img src="./images/img3.png" alt="">
					</div>
					<span class="name">女朋友</span>
				</td>
			</tr>
			<tr>
				<td class="item choujiang-unit choujiang-unit-7" :class="choujiang.index==7?'active':''">
					<div class="img">
						<img src="./images/img4.png" alt="">
					</div>
					<span class="name">茉莉蜜茶</span>
				</td>
				<!--*********************************************************-->
				<td class="">
					<div class="draw-btn" @click="run">立即抽奖</div>
				</td>
				<!--*********************************************************-->
				<td class="item choujiang-unit choujiang-unit-3" :class="choujiang.index==3?'active':''">
					<div class="img">
						<img src="./images/img5.png" alt="">
					</div>
					<span class="name">百度排名第一</span>
				</td>
			</tr>
			<tr>
				<td class="item choujiang-unit choujiang-unit-6" :class="choujiang.index==6?'active':''">
					<div class="img">
						<img src="./images/img7.png" alt="">
					</div>
					<span class="name">和氏璧</span>
				</td>
				<td class="item choujiang-unit choujiang-unit-5" :class="choujiang.index==5?'active':''">
					<div class="img">
						<img src="./images/img6.png" alt="">
					</div>
					<span class="name">欧洲10日游</span>
				</td>
				<td class="item choujiang-unit choujiang-unit-4" :class="choujiang.index==4?'active':''">
					<div class="img">
						<img src="./images/img8.png" alt="">
					</div>
					<span class="name">800万美元</span>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				choujiang:{
					index: 0,     //起点位置
					godown:5,	  //当前转动到哪个位置
					count: 0,     //总共有多少个奖品
					timer: 0,     //setTimeout的ID，用clearTimeout清除
					speed: 20,    //初始转动速度
					times: 0,     //转动次数
					cycle: 50,    //转动基本次数：即至少需要转动多少次再进入抽奖环节
					prize: -1,    //中奖位置
				},
				click:false,
			}
		},
		methods:{
			run(){
				if(this.click){
					return false;
				}else{
					this.choujiang.speed = 100;
					this.zhuan(); //转圈过程不响应click事件，会将click置为false
					this.click = true; //一次抽奖完成后，设置click为true，可继续抽奖
				}
			},
			zhuan() {
				let _this = this;
				_this.choujiang.times += 1;
				_this.roll(); //转动过程调用的是choujiang的roll方法，这里是第一次调用初始化
				
				if (_this.choujiang.times > _this.choujiang.cycle + 10 && _this.choujiang.prize == _this.choujiang.index) {
					clearTimeout(_this.choujiang.timer);
					console.log(this.choujiang.index);
					
					_this.choujiang.prize = -1;
					_this.choujiang.times = 0;
					_this.click = false;
					
				} else {
					if (_this.choujiang.times < _this.choujiang.cycle) {
						_this.choujiang.speed -= 10;
					} else if (_this.choujiang.times == _this.choujiang.cycle) {
						//let index = Math.random() * (this.choujiang.count) | 0; 
						_this.choujiang.prize = _this.choujiang.godown;		//静态演示，转到第几个奖品，实际需请求接口产生
					} else {
						if (_this.choujiang.times > _this.choujiang.cycle + 10 && ((_this.choujiang.prize == 0 && _this.choujiang.index == 7) || _this.choujiang.prize == _this.choujiang.index + 1)) {
							_this.choujiang.speed += 110;
						} else {
							_this.choujiang.speed += 20;
						}
					}
					if (_this.choujiang.speed < 40) {
						_this.choujiang.speed = 40;
					}
					_this.choujiang.timer = setTimeout(_this.zhuan, _this.choujiang.speed); //循环调用
				}
			},
			roll() {
				this.choujiang.index += 1;
				if (this.choujiang.index > this.choujiang.count - 1) {
					this.choujiang.index = 0;
				};
			}
		},
		mounted(){
			let jiang = document.getElementById('choujiang');
			this.choujiang.count = jiang.getElementsByClassName('choujiang-unit').length;
		}
	}
</script>

<style scope type="text/css" lang="scss" >
	* { margin: 0; padding: 0; }
	table { border-spacing: 0; border-collapse: collapse; text-align: center; }
	table tr td{border:5px solid #d80015;}
	#choujiang {
		width: 460px;
		height: 470px;
		margin: 30px auto;
		padding: 40px;
		background: url(images/bg.png) no-repeat;
		.item {
			width: 150px;
			height: 150px;
			background: url(images/bg1.png) no-repeat;
			background-size: 100% 100%;
			&.active {
				background-image: url(images/bg2.png);
			}
			.img {
				display: table-cell;
				width: 150px;
				height: 61px;
				vertical-align: middle;
				text-align: center;
				img {
					vertical-align: top;
				}
			}
			.name {
				display: block;
				margin-top: 10px;
				font-size: 14px;
			}
		}
		
		.draw-btn {
			cursor:pointer;
			display: block;
			height: 150px;
			line-height: 150px;
			border-radius: 20px;
			font-size: 25px;
			font-weight: 700;
			color: #f0ff00;
			background-color: #fe4135;
			text-decoration: none;
			&:hover{
				background-color: #fe8d85;
			}
		}
	}
</style>