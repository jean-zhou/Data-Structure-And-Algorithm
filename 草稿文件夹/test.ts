// class Dog extends Animal {
//     private shoutNum:number = 3
//     public eat() {
//         console.log("i am eating")
//     }
//     private getShoutStr():string {
//         let shoutStr:string = ''
//         for(let i = 0; i < this.shoutNum; i++) {
//             shoutStr += 'wong'
//         }
//         return shoutStr
//     }
//     public say() {
//         console.log(this.getShoutStr())
//     }
//     public waytail() { // 扩展方法

//     }
// }
// let myDog = new Dog()
// console.log(myDog.getShoutStr())  // 报错，因为private定义的是类私有的方法，在外部不能调用


// class Cat extends Animal {
//     public eat() {
//         super.eat()  // 继承父类的方法，会执行
//         console.log('eating fish')  // 还会执行这个
//     }
// }


// interface Flyable {
//     fly()  // 接口定义的fly方法
// }
// interface CatBug {
//     catBug()
// }

// class Bird extends Animal implements Flyable, CatBug {  // 定义的类需要实现两个方法
//     public say() {
//         console.log('zhi')
//     }
//     public fly() {  // 类要实现接口
//         console.log('flyying')
//     }
//     public catBug() {
//         // ... 
//     }
// }

// let flyable:Flyable = new Bird('polly', 1)
// flyable.fly() // 可以正常打印，flyying
// flyable.eat()  // 打印报错，因为 flyable 定义的是接口的Flyable类型，没有Bird类里面的eat方法


// let myCat:Animal = new Cat('xiaohua', 1)
// // 定义的类型是父类的Animal类，然后cat是子类Cat的实例，这样是可以的
// // 因为父类Animal 的属性方法，子类的cat都有
// let myAni:Cat = new Animal('test', 1)
// // 这样的话，编译会报错，因为定义的一个Cat类型，但是是Animal的实例
// // 子类的cat有父类animal没有的东西，所以不能交换，如果myAni.catchMosu 一个父类没有子类有的方法，就会错，，所以就不能定义一个子类类型，然后实例化的父类

class People extends Animal {
    constructor(public name:string, public age:number, public pet:Animal) {
        super(name, age)
    }
    public say() {
        console.log(`my name is ${this.name}, age is ${this.age}, my pet is ${this.pet}`)
    }
}
let myBro:People = new People('xiaoming', 13, new Dog('dahuang', 3))
// 定义的是Animal类，传入的是子类Dog，这个是可以的
// 如果定义的是Dog子类，传入的是父类Animal类，这个是不行的
console.log('totalNum', Animal.totalNum)  // 5
// Dog / Cat / Bird / Dog / People
// 父类和实例都可以获取和修改这个方法