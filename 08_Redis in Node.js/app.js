import redisClient from "./redis.js";

   await redisClient.setJson("user:1", { name: "Anurag", age: 25 });
   const user = await redisClient.getJson("user:1");
   console.log(user);

await redisClient.quit(); 