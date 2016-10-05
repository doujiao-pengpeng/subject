(function(){
  var oQuery=function(name,age){
    return new oQuery.prototype.init(name,age);
  }

  oQuery.prototype={
    init:function(name,age){
      this.name=name;
      this.age=age;
    },
    sayage:function(){
      console.log(this.age);
    }
  }

  oQuery.prototype.init.prototype=oQuery.prototype;
  //


  //创建命名空间
  window.oQuery=window.$=oQuery;
})(window);

window.onload=function(){
  var xiaoming=$('xiaoming','20');
  xiaoming.sayage();
  console.log(xiaoming);
}
