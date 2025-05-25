import { createClient } from "redis";

const redisClient = await createClient()
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();


redisClient.getJson = async function (key) {
  const result = await this.get(key);
  return JSON.parse(result);
}

redisClient.setJson = async function (key, value) {
  return this.set(key, JSON.stringify(value));
}


export default redisClient;

