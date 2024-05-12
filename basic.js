// for each✅
// map ✅
// filter✅
// find✅
// object✅
// length ✅



var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach
arr.forEach(function(val) {
    console.log(val + "kunal");
});

// map
var doubledArr = arr.map(function(val) {
    return val * 2;
});
console.log(doubledArr);

// filter
var filteredArr = arr.filter(function(val) {
    return val <= 2;
});
console.log(filteredArr);

var a = {
    name: "kunal",
    age: "20",
    skills: "web-developer"
};
console.log(a);

function myFunction(a, b, c) {
    return "hello";
}
console.log(myFunction());
