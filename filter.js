//==========>JS FILTER

let myArray = [1,2,3,4,5,6,7,8,9,10];
let filterData = myArray.filter(myfun);

function myfun(x){
    return x < 4;
}

console.log(filterData);