window.onload=function(){

/**********************工厂模式*********

	function Person(name,age){
		var o = new Object();
		o.name = name;
		o.age = age;
		o.sayname = function(){
			alert(o.name);
		}
		return o;
	}

	var xiaoming = Person('xiaoming',20);
	console.log(xiaoming);
	xiaoming.sayname();

***********************/

/*******************构造函数模式*******
	
	function Person(name, age){
		this.name = name;
		this.age = age;
		this.sayname = function(){
			alert(this.name);
		}
	}

	xiaohon = new Person('xiaohon',18 );

	console.log(xiaohon);
	xiaohon.sayname();

**********************/



}