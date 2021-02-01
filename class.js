//class and constructor rules
class Student{
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.school = "Dhanmondi govt.school";
    }

}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(14, "Mahi");
const student3 = new Student(25, "Bappi")
console.log(student1, student2, student3);