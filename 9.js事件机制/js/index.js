window.onload=function(){
	var parent=$('parent');
	var child=$('child');
	parent.onclick=function(){
		alert('parent');
	}

	child.onclick=function(){
		alert('child');
	}

	// var btn=$('btn');
	// btn.addEventListener('click',function(){
	// 	alert(this.value)
	// },false);
	var btn = document.getElementById('btn');
	EventUtil.addHandler(btn,'click',function(){
		alert('点击了');
	});
}

function $(id){
	return document.getElementById(id);
}

var EventUtil = {
	addHandler: function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.addachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type] = handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler)
		}else{
			element["on"+type]=null;
		}
	}
}
