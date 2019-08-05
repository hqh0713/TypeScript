"use strict";
/*
1-1 数据类型：
  布尔类型(boolean)
  数字类型(number)
  字符串类型(string)
  数组类型(array)
  元组类型(tuple)
  枚举类型(enum)
  任意类型(any)
  null
  undefinded
  void类型
  never类型

  写ts必须先指定变量类型
*/
// 数组类型
// 方式一：
var arr = [1, 2, 3];
// 方式二：
var arr2 = [1, 2, 3, 4];
// 元组类型  特殊的数组
var tup = [1, '222'];
// 枚举类型
var flag;
(function (flag) {
    flag[flag["success"] = 1] = "success";
    flag[flag["failed"] = 2] = "failed";
    flag[flag["err"] = 3] = "err";
})(flag || (flag = {}));
var succ = flag.success; // 1
var err = flag.err; // 3 若枚举未赋值，则值为下标
// 任意类型 
var any = '123';
any = 12;
// never类型：表示的是那些永不存在的值的类型；never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
// 变量也可能是never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 
// 即使any也不可以赋值给never。
// 1-2 函数
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
var newAdd = function (x, y) { return x + y; };
// 可选参数 默认参数
// 在TypeScript里我们可以在参数名旁使用?实现可选参数的功能
var fullName = function (f, l) { return f + "---" + l; };
function defaultFullName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
/*剩余参数  剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。
  编译器创建参数数组，名字是你在省略号（...）后面给定的名字，你可以在函数体内使用这个数组
*/
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
