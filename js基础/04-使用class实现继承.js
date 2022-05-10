class User{
  constructor(name,age) {
    this.name = name
    this.age = age
  }
  sayHi() {
     return `姓名:${this.name}`
  }
  play() {
      console.log('go to park')
  }
}
let fei = new User('fifie', 23)
// fei.play()

// class 的本质是 function
// 它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法

// class继承

class Students extends User {
  constructor(name,age) {
    // 使用super继承 属性
    super(name,age);

  }
  study() {
    console.log('PHP')
  }
}
let wzk = new Students('cnr',22)
console.log(wzk.name,wzk.age)
wzk.play()