import { Student, Teacher } from "./person.js"
import { Tabulator } from 'https://unpkg.com/tabulator-tables@6.2.5/dist/js/tabulator_esm.min.mjs';

let teachers = []
let students = []

function createPerson() {

    event.preventDefault();

    console.log("enter function")

    let name = inputName.value
    let age = inputAge.value
    let role = inputRole.value
    let grade = inputGrade.value
    let subject = inputSubject.value


    if (role === "Teacher") {
        if(subject.length > 0){
            let tmp = new Teacher(name, age, subject)
            teachers.push(tmp)
            errorSubject.innerHTML =""
        }else{
            errorSubject.innerHTML  = "The Subject is Requiered"
        }
       
    }

    if (role === "Student") {

        if (grade.length > 0) {
            let tmp = new Student(name, age, grade)
            students.push(tmp)
            errorGrade.innerHTML =""
        }else{
            errorGrade.innerHTML = "The Grade is Requiered"
        }


    }



    if (teachers.length >= 1) {
        let tableTeacher = new Tabulator("#outputTeachers", {
            data: teachers, //assign data to table
            autoColumns: true, //create columns from data field names
            layout:"fitDataFill",      //fit columns to width of table
    responsiveLayout:"show",
        });
    }


    if (students.length >= 1) {
        let tableStudents = new Tabulator("#outputStudent", {
            data: students, //assign data to table
            autoColumns: true, //create columns from data field names
            layout:"fitDataFill",      //fit columns to width of table
    responsiveLayout:"show",
        });
    }


}

window.createPerson = createPerson