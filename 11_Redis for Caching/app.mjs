import express from "express";
import { createClient } from "redis";
const app = express();
app.use(express.json());

const client = await createClient()
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();



app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const cacheData = await client.json.get(`user:${userId}`);
  if (cacheData) {
    return res.json(cacheData);
  }
  const userData = await getUser(userId);
  await client.json.set(`user:${userId}`, "$", userData);
  await client.expire(`user:${userId}`, 60);
  res.send("user data");
});

app.put("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const redisKey = `user:${userId}`;
  await updateUser(userId, userData);
  await client.del(redisKey);
  res.send("user data updated");
});

app.listen(4000, () => {
  console.log("Server started on 4000");
});

async function getUser(userId) {
  const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
  return await response.json();
}

async function updateUser(userId, userData) {
  //https://fakestoreapi.com/products/{id}
  const response = await fetch(`https://fakestoreapi.com/products/${userId}`, {
    method: "PUT",
    body: JSON.stringify(userData),
  });
  return await response.json();
}