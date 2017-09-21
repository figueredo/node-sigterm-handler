const sigtermHandler = require("./")

sigtermHandler(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Oh no"))
    }, 2000)
  })
})

setTimeout(() => {}, 100000)
console.log("running...")
