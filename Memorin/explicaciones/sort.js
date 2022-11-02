let array = ['G','A','B','C','D'];
// array.sort();


// Desordenar con una función anónima 
/*
array.sort(function () {
    return 0.5-Math.random();
});
*/

// Desordenar con una función flecha
array.sort(() => 0.5-Math.random());
console.log(array);