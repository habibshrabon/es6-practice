// //without function
// class parent {
//     constructor(){
//         this.fatherName = "schwernegger";
      
//     }
// }

// class child extends parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }

// const baby = new child('Arnold');
// const baby2 = new child("Tom")
// // console.log(baby);
// // console.log(baby2);


//with function
class parent {
    constructor(){
        this.fatherName = "schwernegger";
      
    }
}

class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + ' ' +this.fatherName;
    }
}

const baby = new child('Arnold');
const baby2 = new child("Tom")
console.log(baby.getFullName());
console.log(baby2.getFullName());