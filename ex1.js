function add([x, y]){
    console.log(x);
    console.log(y);
  return x + y;
}

let rst = add([1, 2]);
console.log(rst);


let x=1;
let y=2;
console.log("exchange value.");
console.log("before:");
console.log("x="+x);
console.log("y="+y);
[x,y]=[y,x]
console.log("after:");
console.log("x="+x);
console.log("y="+y);
//
function p(input){
    let top=1;
    let right=2;
    let bottom=3;
    let left=4;
    return{top,right,bottom,left};
}
const {right,left} = p('input');
console.log("left= "+left);
console.log("right= "+right);

//
(function (a){console.log(a)})('it work!')
//(function (a){console.log(a)})('xiaoMingBai')

//
let array1 = [1,2,3,4,5];
console.log("array1= "+array1);
console.log(array1.slice(1));

const [a,b,...rest]=array1;
console.log("a= "+a);
console.log("b= "+b);
console.log("rest= "+rest);

//
let [bar,foo] = [1];
console.log("bar= "+bar);
console.log("foo= "+foo);
// 等号右边的被解构对象必须是可以遍历的(iteratable),否则报错。
// 因此，以下两种写法都是错的。
// let [foo1]=1;
// let [foo1]=false;
//
console.log("对象解构");
// 对象的解构
let o = {foo222,bar222} = {foo222:"foo-data-222",bar222:"bar-data-222"};
console.log("foo222= "+o.foo222);
console.log("bar222= "+o.bar222);
console.log("foo222-new= "+foo222);
console.log("bar222-new= "+bar222);
console.log(o);
console.log({...o});
console.log("o= "+o.foo);

//
//let {a,b}={a:"foo-data",b:"bar-data"};
//console.log(a);

let {foo3,bar3} = {foo3:"foo-data-3",bar3:"bar-data-3"};
console.log("foo3= "+foo3);
console.log("bar3= "+bar3);

let o4 = {foo4,bar4,c4} = {foo4:"foo-data-4",bar4:"bar-data-4",c4:"c4-4"};
console.log(foo4);
console.log(bar4);
console.log(c4);
console.log(o4);
console.log('o4= '+o4);
//
console.log("/////别名////");
let {a5:a5n,b5:b5n,c5:c5n} = {a5:"a5",b5:"b5",c5:"c5"};
// console.log(a5); // 出错：只是用a5到data store中去解析值，最终生成的变量是指定的别名a5n。
console.log(a5n);// 正常执行。
// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
// a5只是匹配的模式，a5n才是真正的变量。

// 数值和布尔值的解构赋值
// 右边是数值和布尔值，会先转成对象。
let {toString:s}=123;
console.log("s ="+s);
// 解构赋值的规则：如果右边不是对象和数组，则先试着转成对象，如果无法转成对象，则报错。

//函数参数的解构赋值.
// map方法的参数是另一个函数。这个函数的参数是一个数组。
// 但运行时真实的参数传入的瞬间，这个数组将被解构成变量a和b，因此在这个函数的内部,能看到的参数就是a和b。

let na = [[1,2],[3,4]].map(
    ([a,b])=>a+b
);
console.log(na);

// 带默认值的函数参数。
console.log("/////函数参数的解构/////////////");
function move({x=0,y=0}={}){
return [x,y];
}
let r1 = move({x:3,y:8});
console.log("r1= "+r1);// 3,8
let r2 = move({x:3});// y传值进去，设为默认值0.
console.log("r2= "+r2);// 3,0
let r3 = move({});
console.log("r3= "+r3);
let r4 = move();
console.log("r4= "+r4);

//遍历map
console.log("////////遍历map////////////////");
const map = new Map();
map.set('first','hello');
map.set('second','world');
for(let[key,value] of map){
console.log(key+" is "+value);
}
console.log("////////只要Key//////////////////////");
for(let[key] of map){
    console.log(key);
}

console.log("////////只要value//////////////////////");
// 对map进行loop时，每次返回的都是一个数组，第一个元素是key,第二个value，所以要用数组模式去解构这个值。
// 现在要跳过key去解构value所以模式中要用逗号把key的位置留出来。
for(let[,value] of map){
console.log(value);

}
// 数组解构：跳位解构时，模式里要用逗号占位。
console.log("数组解构：跳位解构时，模式里要用逗号占位。");
let [x1,,z1] = [1,2,3];
console.log(x1);
console.log(z1);


