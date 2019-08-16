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
class Person {
  name:string;
  nationality:string;
  constructor(name:string, nationality:string) {
    this.name = name;
    this.nationality = nationality;
  }
  getInfor() {
    return `${this.name},${this.nationality}`
  }
}
class Student extends Person {
  private school:string;
  constructor(name:string, nationality:string, school:string) {
    super(name, nationality)
    this.school = school;
  }
  getInfor() {
    return `${this.name},${this.nationality},${this.school}`
  }
}
let person = new Person('tomm', 'china')
console.log(person.getInfor())
