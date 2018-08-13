class Perple {
  constructor (name, age) {
    this.age = age,
    this.name = name
  }

  eat () {
    alert (`${this.name}要开始吃东西了`)
  }
}

const xiaoming = new Perple('xiaoming')

xiaoming.eat()

console.log(xiaoming.name)