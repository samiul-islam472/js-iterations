const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby', 
    swift: 'swift by apple',
}

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key of myObject) {
    console.log(key);
}


for (const key of myObject) {
    console.log(myObject[key]);
}


for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);                          
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('UK', "United Kingdom")

// for (const key in map) {
//     console.log(key);
// }  