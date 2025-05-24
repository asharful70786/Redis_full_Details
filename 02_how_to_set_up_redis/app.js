// Redis is not officially supported on Windows.WSL2 lets you run Linux binaries natively on Windows. For this method to work, you'll need to be running Windows 10 version 2004 and higher or Windows 11.

`
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update
sudo apt-get install redis
`
//run the code to instal redis client and server on your local machine
//turn on server 
redis - server

//turn on client
redis - cli
//redis Gli Client download fromm below
"https://redis.io/download"

  //set key
  `set key "value"`
  set name "bitto"

  //get key
  `get key `
  get name


//that is the simple way to instal and use redis  