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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// es6
// class animal{
//   name:string; // 属性
//   legs:number;
//   constructor(n:string, l:number){ // 构造函数
//     this.name = n;
//     this.legs = l
//   }
//   setName(name:string):void {
//     this.name = name;
//   }
//   getName():string {
//     return this.name
//   }
//   run():void { // 方法
//     console.log(this.name + '在跑~~')
//   }
// }
// let a = new animal('Tom', 4)
// a.run()
// a.setName('Tonny')
// a.getName()
// a.run()
// TypeScript 类 继承
var Person = /** @class */ (function () {
    function Person(name, nationality) {
        this.name = name;
        this.nationality = nationality;
    }
    Person.prototype.getInfor = function () {
        return this.name + "," + this.nationality;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, nationality, school) {
        var _this = _super.call(this, name, nationality) || this;
        _this.school = school;
        return _this;
    }
    Student.prototype.getInfor = function () {
        return this.name + "," + this.nationality + "," + this.school;
    };
    return Student;
}(Person));
var person = new Person('tomm', 'china');
console.log(person.getInfor());
