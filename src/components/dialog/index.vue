<template>
	<div>
		<v-dialog :data="dialogConf"></v-dialog>
	</div>
</template>

<script>
export default {
  data () {
    return {
	    dialogConf:{
	    	type:"free",//弹框类型 alerts，tishi，confirm，free
	    	title:"点击", //按钮名称
	    	diaTitle:"哈哈", //弹框标题
	    	diaContent:`<h2 style="width:400px">hallow world</h2>`,
	    	cancel:false, //是否显示取消按钮
	    	iscenter:true,//按钮是否居中
	    }
    }
  },
  components:{
  	"v-dialog":resolve => require(['@/components/dialog/dialog'],resolve),
  }
}
</script>

<style>
</style>