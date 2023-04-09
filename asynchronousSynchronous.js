// console.log('bangladesh');
// console.log('bharot');
// console.log('pakistan');

let fun1 = () => {
    console.log("fun1");
};

let loadingTime = () => {
    console.log("fun2");
}

let fun2 = () => {
    setTimeout(loadingTime, 2000);
}

let fun3 = () => {
    console.log("fun3");
};

fun2();
fun3();
fun1();

