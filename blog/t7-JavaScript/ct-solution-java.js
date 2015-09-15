var array = [1,2,3,4,5,6,7,8,9,10];

var even_array = [];
for (var counter = 0; counter < array.length; counter ++) {
  if (array[counter] % 2 !== 0) {
    even_array.push(array[counter]);
  };
};

console.log(even_array);


