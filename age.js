function ageCheck(){
    let age = promt("Enter your age:");
    age = preseInt(age);

    if (age < 13){
        alert("You are a child.");
    }else if (age >= 13 && age < 20){
        alert ("You are a teenager.");
    }else{
        alert("You are an adult.");
    }
}