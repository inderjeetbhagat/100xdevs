// //Array
// let personArray = ["harkirat", "Inder", "Kash"];

// console.log(personArray[0]);

// const ages = [23, 21, 34, 56];
//  for(let i = 0; i < ages.length; i++) {
//     if (ages[i] % 2 == 0) {
//         console.log(ages[i]);
//     }
//  }

const user1 = {
    firstName: "inder",
    gender: "male"
}

const allUsers = [{
    firstName: "Inder",
    gender: "male"
},{
    firstName: "kirat",
    gender: "male"
}]

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstName"]);
    }
}

console.log(user1["gender"]);