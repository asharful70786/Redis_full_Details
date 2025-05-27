//In redis rejson . like we accss key in obj student.name . sm like that to acces the key we have to use student $.name
//and the $ sign represents to the full obj


import redisClient from "./redis.js";

// let a1 = await redisClient.json.set("user:1" , "$" , {name : "rishan" , age : 1 , city : "kolkata"} );

//When using a JSON path (like $.name), Redis returns an array if you use the root $
let a1 = await redisClient.json.get("user:1",{
  path : "$.name" //and this is json path
});
console.log(a1);  


await redisClient.quit(); 