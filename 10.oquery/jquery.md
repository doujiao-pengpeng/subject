理解jquery是面对对象的风格，
`$('.css').click(function(){});`


先来回顾下常见的工厂方式
```
Person(name,job){
  var o=new Object();
  o.name=name;
  o.job=job;
  o.sayname=function(){
    alert(name);
  }
  return o;
}
var xiaoming=Person('xiaoming','teacher');
var xiaohua=Person('xiaohua','student');
```
缺点：
- 不能解决对象识别
- 无new构造
- 方法重复

##常见的创建对象的方式
```js
  function Person(name,age){
    this.name=name;
    this.age=age;
  }

  Person.prototype={
    sayname :function(){
      console.log(this.name;)
    }
  }

  var xiaoming=new Person('xiaoming','teacher');
  var xiaohua=new Person('xiaohua','student');
```
