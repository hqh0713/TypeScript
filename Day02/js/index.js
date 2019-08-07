"use strict";
/*
 类：
*/
/* es5 中的类
  function animal(name, legs) {
    this.name = name;
    this.legs = legs;

    this.run = function() {
      .....
    }
  }
  // 原型链增加方法/属性
  animal.prototype.color = 'red'
  animal.prototype.eat = function() {
    console.log(this.name + '吃xx')
  }
  // 类中增加静态方法
  animal.shout = function() {
    ...
  }
  // 类的静态方法不需要实例化，直接 类.方法名() 调用
  var dog = new animal('dog', 4)

// es5 继承
1⃣️：原型链继承
    可以继承父类构造函数以及原型链上的属性和方法；但是实例化子类无法给父类传参
function cat() {
}
cat.prototype = new animal()
cat.prototype.constuctor = cat
let myCat = new cat('Tom', 4)
myCat.eat() // undefinded吃xx --> 实例化子类无法给父类传参
2⃣️：对象冒充继承
    可以继承构造函数内的熟悉和方法，但是原型链上定义的属性或者方法无法继承
function dog() {
  animal.call(this);
}
3⃣️：组合继承
function pig() {
  animal.call(this)
}
pig.prototype = new animal()
pig.prototype.constructor = pig
*/
// es6
// 构造类
var animal = /** @class */ (function () {
    function animal(n, l) {
        this.name = n;
        this.legs = l;
    }
    animal.prototype.setName = function (name) {
        this.name = name;
    };
    animal.prototype.getName = function () {
        return this.name;
    };
    animal.prototype.run = function () {
        console.log(this.name + '在跑~~');
    };
    return animal;
}());
var a = new animal('Tom', 4);
a.run(); // Tom在跑～～
a.setName('Tonny');
a.getName();
a.run(); // Tonny在跑～～
