'use strict';
class Person{
    constructor(name,age,id) {
        this.name = name;
        this.age =age;
        this.id = id;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
//-----------------------------------------


class Klass{
    constructor(number){
        this.klass=number;
        this.leader;
    }
    assignLeader(leader) {
        this.leader=leader;//leader id
        return this.leader;
    }
    //Class有一个assignLeader方法，接收一个Student实例。意为将一名学生设置为该Class的班长。
}


class Student extends Person {
    constructor(name,age,id,num){
        super(name,age,id);
        //Klass class
//              let klassInstance=new Klass(num);
        this.klass=new Klass(num);
        this.id=id;
    }
    introduce(){
        let klassInstance=new Klass(this.klass);
        let leaderofklass=klassInstance.assignLeader(leader);
        if (this.id===leaderofklass){
            return `${super.introduce()} I am a Student.I am Leader of Class ${this.klass.klass}.`
        }else{
            return `${super.introduce()} I am a Student.I am at Class ${this.klass.klass}.`
        }
    }
}
let studentInstance=new Student('Tom',21,2015211573,2);
let leader=studentInstance.id;
let studentt=new Student('Tom',21,2015211573,2);
console.log(studentt.introduce());

//---------------------------teacher part-----------------------

class Teacher extends Person {
    constructor(name, age, id, num) {
        super(name, age, id);
        this.klass = new Klass(num);
    }

    introduce() {
        if (this.klass !== 0) {
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass.klass}.`
        } else {
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }
    }
}

let teacher=new Teacher('Tom',21,233333333,2);
console.log(teacher.introduce());