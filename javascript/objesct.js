let stud = {
    id:101,
    name:"test",
    email:"test@email.com",

    marks:{
        python : 67,
        java : 85,
        c:67,
    },
    hello:function(){
        console.log("hello");
    },

    x:()=>{
        console.log("test");
    },

}

//extract 
// let {id , name, email}=stud
// console.log(email);


//object function
// stud.hello()
// console.log(stud.hello);
// stud.x()


//nested object print==================
// console.log(stud.marks);
// console.log(stud.marks.java);



//print objest access object variable==============
// console.log(stud);
// console.log(stud.email);

//update object==================
// stud.email="test1@email.com"
// stud["name"]="test1"
// console.log(stud);

//add===============================
// stud.con=234567
// console.log(stud);

//delet========================
// delete stud.email
// console.log(stud);


 

