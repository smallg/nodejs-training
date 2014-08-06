/**
 * Created by Administrator on 2014/8/6.
 */
var foo = require('./foo-module.js');
var myFoo = new foo("Tom", 20);
console.log(myFoo.getName());
console.log(myFoo.getAge());

myFoo.setName("Small");
myFoo.setAge(28);
console.log(myFoo.getName());
console.log(myFoo.getAge());
