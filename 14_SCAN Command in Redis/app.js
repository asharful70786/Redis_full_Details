import { createClient } from "redis";

const redisClient = createClient();
await redisClient.connect();
// console.log( await redisClient.keys("*"));

let cursor = 0;

do {
  const { cursor: nextCursor, keys } = await redisClient.scan(cursor, {
    MATCH: "*",
    COUNT: 20,
    TYPE: "string",
  });
  console.log(nextCursor);
  console.log(keys);
  cursor = nextCursor;
} while (cursor !== 0);

await redisClient.quit();