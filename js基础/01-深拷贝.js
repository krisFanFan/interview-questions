
let obj = {
  name: 'hello',
  hobby: {
    a: 'eat meat',
    b: 'play'
  },
  friend: ['李华', 'jack', 'Tom']
}
let parent = {
  name: 'parent'
}
Object.setPrototypeOf(obj, parent)//设置hd的原型是parent

/**
 * @param {Object} startObj 要拷贝的对象
 * @param {*} endobj
 * @returns
 */
function deepClone(startObj, endobj) {
  if (typeof startObj != 'object' || startObj == null) {
    return startObj
  }
  var obj = endobj || {}
  for (var i in startObj) {
    if (typeof startObj[i] === 'object') {
      obj[i] = startObj[i].constructor === Array ? [] : {} // 再次判断其构造函数是数组的构造函数还是对象的构造函数
      deepClone(startObj[i], obj[i])
    } else {
      obj[i] = startObj[i]
    }
  }
  return obj


}
let objCopy = deepClone(obj)
objCopy.hobby.a = '哈哈哈哈哈哈哈哈'
console.log(objCopy, obj)
