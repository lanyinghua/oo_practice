/**
 * Created by huadu on 7/17/17.
 */
'use strict';
class Person{
    constructor(name,age) {
        this.name = name;
        this.age =age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
// let personn = new Person('Tom',21);
// console.log(personn.introduce());

class Klass {
    constructor (number){
        this.number = number;
    }
}
// let klass = new  Klass(2);
// console.log(klass.number)

class Student extends Person {
    constructor(name,age,number){
        super(name,age);
        let klass=new Klass(number);
        this.klass=klass.number;
    }
    introduce(){
        return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`
    }
}
let studentt=new Student('Tom',21,2);
console.log(studentt.introduce());

class Teacher extends Person {
    constructor(name,age,klass,student){
        super(name,age);
        this.klass=klass;
        this.studenttoteach=student;
    }
    introduce(){
        if (this.klass!==0){
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }
    }
    introduceWith(student){//传入一个student，比如Jerry
        if (student === this.studenttoteach){//如果Jerry是Teacher教的班级
            return `${super.introduce()} I am a Teacher. I teach ${this.studenttoteach}.`
        }else{
            return `${super.introduce()} I am a Teacher. I don't teach ${this.studenttoteach}.`
        }
    }
}
let teacher=new Teacher('Tom',21,2,'Jerry');
console.log(teacher.introduceWith('Jerry'));