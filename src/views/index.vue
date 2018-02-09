<template>
	<div class="nav">
		<ul class="clear">
			<li>
				<router-link to="/lunbo">轮播</router-link>
				<router-link to="/dialog">dialog</router-link>
				<router-link to="/choujiang">抽奖</router-link>
			</li>
		</ul>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		methods:{
		},
		mounted(){
		}
	}
</script>

<style scoped type="text/css" lang="scss">
	.nav{
		ul{
			height:100px;
			line-height: 100px;
			border-bottom:1px solid #BD0A01;
			li{
				float:left;
				margin-left:50px;
				a{
					border:1px solid #42b983;
					padding:5px 30px;
					border-radius:10px;
				}
			}
		}
	}
</style>