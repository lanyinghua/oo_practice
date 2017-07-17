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

class Student extends Person {
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.klass}.`
    }
}
// let studentt=new Student('Tom',21,2);
// console.log(studentt.introduce());

class Worker extends Person {
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`
    }
}
// let worker=new Worker('Tom',21);
// console.log(worker.introduce());