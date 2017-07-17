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
let personn = new Person('Tom',21);
console.log(personn.introduce());

class Student extends Person {
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`
    }
}
let studentt=new Student('Tom',21,2);
console.log(studentt.introduce());

class Teacher extends Person {
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if (this.klass!==0){
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }

    }
}
let teacher=new Teacher('Tom',21,0);
console.log(teacher.introduce());

