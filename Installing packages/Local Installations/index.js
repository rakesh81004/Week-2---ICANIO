const lodash = require('lodash');

const array = [ 1,2,2,3,4,5,6,7,7];
const remove_dup = lodash.uniq(array);

console.log("Array Without duplicates : "+ remove_dup);