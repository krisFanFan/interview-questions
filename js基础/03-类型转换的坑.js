const a = true + '10' //true10

// ==运算
null == undefined
console.log(null == undefined) //true
// 除了 == null之外，其他都一律用 ===
const obj = {
  x:100
}
if (obj.x == null) {}
// 相当于:
// if(obj.a===null||obj.a===undefined )


// if语句和逻辑运算
//truely变量: !!a === true的变量 {}
//falsely变量: !!a === false的变量 例如null ,'',undefined

// 以下是falsely变量。除此之外都是true变量
/**
 * !!0 ===false
 * !!NaN ===false
 * !!'' ===false
 * !!null ===false
 * !!undefined ===false
 * !!false ===false
 */

// const c = null
// if (c) {

// }return console.log('不会进到c里面')


const obj1 = {x: 100, y:200 }
const obj2 = obj1
let X1 = obj1.x
obj2.x = 101
X1 = 100
console.log(obj1, obj2) //{x:101}

const n = null //特殊引用类型，指针指向为空地址
// 特殊引用类型，但不用于储存数据，所以没有拷贝，复制函数