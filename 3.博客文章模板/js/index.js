window.onload=function(){
	/*普通的对象编写方式
	function Oquery(name){
		this.name=name;
		console.log('我是Oquery');
	}

	Oquery.prototype={
		show1:function(){
			console.log('我是show1');
		},
		show2:function(){
			console.log(this.name);
		}
	}

	var a = new Oquery('doujiao');
	a.show1();
	a.show2();
	*/

	function Oquery(name){
		this.name=name;
		console.log('我是Oquery');
		return new Oquery.prototype.init(name);
	}

	//其实实例继承的是原型的方法，但是this指向的是自己
	//所以Oquery('DOM节点')是一个工厂方法

	Oquery.prototype={
		init:function(name){
			this.name=name;
			return this;
		},
		show2:function(){
			console.log(this.name);
			return this;
		},
		show:function(){
			console.log('s');
			return this;
		}
	}
	Oquery.prototype.init.prototype=Oquery.prototype;

	var a =Oquery('doujiao');
	a.show2().show();

	//像上面的那样返回的是Oquery原型的init()构造函数的实例，把init的原型改为Oquery的原型，这样就和Oquery
	//产生了关系，但是this的问题是个问题，init构造器的作用域是init本身，这样还需要把参数传递到init里面





}