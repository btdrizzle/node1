var faveBands = require("./bands.js");

console.log(faveBands.bands);

for(key in faveBands.bands) {
    
    console.log(`My fave ${key} group is ${faveBands.bands[key]}`); 
}