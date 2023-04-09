// let display = (something) => {
//     console.log(something)
// }

// let higherOrderFun = (Name, Class, CallBackFun) => {
//     const details = `My name is ${Name} & i read is class ${Class}`;
//     CallBackFun(details);
// }

// higherOrderFun("Eshan", "12", display);

let display = (text) => {
    console.log(text);
}

let higherOrderFun = (name, age, CallBackFun) => {
    const showData = `My Name is ${name} and I'm ${age} years old.`;
    CallBackFun(showData);
}

higherOrderFun("Abu Md Nayeem Khan", 22, display);
