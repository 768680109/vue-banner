<template>
	<div id="dialog">
		<button @click="open('+data.type+')">{{data.title}}</button>
		<div class="dia-message disNone disOpacity" ref="message">
			<div class="box boxnone" ref="box">
				<div class="header">
					<p>{{data.diaTitle}}</p>
					<button  @click="close">X</button>
				</div>
				<div class="content" v-html="data.diaContent"></div>
				<div class="bottom" :style="data.iscenter?{'textAlign':'center'}:{}">
					<button class="yes" @click="go" >确定</button>
					<button class="no" @click="close" v-if="data.cancel">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['data'],
		data(){
			return{
			}
		},
		methods:{
			open(val){
				/*classList.remove();classList.add();添加删除class*/
				this.$refs.message.classList.remove("disNone");
				setTimeout(()=>{
					this.$refs.message.classList.remove("disOpacity");
					this.$refs.box.style.top = "50%";
				},10)
			},
			close(){
				this.$refs.message.classList.add("disOpacity");/*classList.remove("active");*/
				this.$refs.box.style.top = "49%";
				setTimeout(()=>{
					this.$refs.message.classList.add("disNone");
				},300)
			},
			go(){
				this.$refs.message.classList.add("disOpacity");/*classList.remove("active");*/
				this.$refs.box.style.top = "49%";
				setTimeout(()=>{
					this.$refs.message.classList.add("disNone");
				},300)
				window.location.href="http://www.baidu.com"
			}
		},
		mounted(){
			//console.log(this.data);
		}
	}
</script>

<style scope type="text/css" lang="scss">
	button{
		border:1px solid green;
		background:white;
		padding:6px 20px;
		border-radius:5px;
	}
	#dialog{
		margin:auto;
		margin-top:50px;
		.dia-message{
			position: fixed;
		    top: 0;bottom: 0;
		    left: 0;right: 0;
		    z-index: 9000;
		    width:100%;
		    height:100%;
		    background:rgba(0,0,0,.4);
		    transition:all .1s ease;
		    &.disOpacity{
		    	opacity:0
		    }
		    &.disNone{
		    	display:none;
		    }
		    .box{
		    	display: inline-block;
			    min-width: 300px;
			    background-color: #fff;
			    border-radius: 4px;
			    border: 1px solid #e6ebf5;
			    box-shadow: 2px 2px 12px 0 rgba(0,0,0,.2);
			    min-height:100px;
			    position:fixed;
			    top:49%;
			    left:50%;
			    /*translate3D中出现小数在chrom会导致文字模糊*/
			    transform:translate(-50%,-50%);
			    padding:15px;
			    transition:all .2s linear;
			    .header{
			    	position:relative;
			    	p{
			    		text-align:left;
			    		height:30px;
			    		line-height:30px;
			    	}
			    	button{
			    		position: absolute;
					    right: 0px;
					    top: 4px;
					    cursor: pointer;
					    border: 1px solid #409eff;
					    border-radius: 5px;
					    &:hover{
					    	background:#409eff;
					    	color:white;
					    }
			    	}
			    }
			    .content{
			    	padding: 20px 0px;
			    }
			    .bottom{
			    	text-align:right;
			    	button{
			    		margin-left:5px;
			    		border:0px;
			    		color:#fff;
			    		&.yes{
			    			background-color:#409eff;
			    		}
			    		&.no{
			    			background-color:#eb9e05;
			    		}
			    		&:hover{
			    			opacity:0.6;
			    			cursor:pointer;
			    		}
			    	}
			    }
		    }
		}
	}
</style>