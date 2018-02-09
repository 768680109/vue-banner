<template>
	<div id="app">
		<transition name="fade" mode="out-in">
    		<router-view></router-view>
    	</transition>
	</div>
</template>

<script>
export default {}
</script>

<style>
	/*控制全局过渡效果*/
	.fade-enter-active,
	.fade-leave-active {
		transition: all .2s ease;
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
</style>
		   