export class Person {

    constructor(name , age){
        this.name = name
        this.age = age
    }    

}

export class Teacher extends Person {

    constructor(name, age, subject){

        super(name, age)
        this.subject = subject

    }

}


export class Student extends Person {

    constructor(name, age, grade){

        super(name, age)
        this.grade = grade

    }

}