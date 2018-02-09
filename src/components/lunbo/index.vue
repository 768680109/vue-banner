<template>
  <div class="hello">
    <v-lunbo :imgs='imgUrl' height="400"></v-lunbo>
  </div>
</template>

<script>
export default {
  data () {
    return {
	    imgUrl:[
	      	{
	      		url:"http://www.baidu.com",
	  				imgurl:require("@/assets/img/11.jpg"),
	  		},
	  		{
	  			url:"http://www.taobao.com",
	  			imgurl:require("@/assets/img/22.jpg"),
	  		},
	  		{
	  			url:"http://www.jd.com",
	  			imgurl:require("@/assets/img/33.jpg"),
	  		},
	  		{
	  			imgurl:require("@/assets/img/44.jpg"),
	  		},
	    ]
    }
  },
  components:{
  	"v-lunbo":resolve => require(['@/components/lunbo/lunbo'],resolve),
  }
}
</script>

<style scoped>
</style>
