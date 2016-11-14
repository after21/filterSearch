window.onload=function(){
	var images=document.getElementsByTagName("img");//找到所有图片，为一个数组
	var input=document.getElementsByTagName("input")[0];//找到输入框元素
	var cache=[];//新建一个数组存储alt值
	//遍历images数组
	for(var i=0;i<images.length;i++){
		cache[i]=images[i].alt.toLowerCase();//把小写的alt值存入cache数组
	}
	function filter(obj){
		var query=obj.value.toLowerCase();//获取当前输入框的值
		for(var j=0;j<cache.length;j++){  //遍历cache数组
			var index=0;
			if(query){ //如果输入框有值
				index=cache[j].indexOf(query);//匹配内容
				images[j].style.display=index===-1?'none':'';//不符合条件的图片将隐藏起来
			}
		}
	}
	input.onkeyup=function(){
		filter(this);
	}
}