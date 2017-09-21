module.exports = (fn, timeout = 20 * 1000) => {
  const timeoutPromise = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, timeout)
    })
  }
  const exit = async type => {
    console.error(`caught ${type}, exiting...`)
    if (!fn) return
    return Promise.race([fn, timeoutPromise]).catch(error => {
      console.error(error.stack ? error.stack : error.toString())
      process.exit(1)
    })
  }
  process.on("SIGINT", error => {
    exit("SIGINT").then(() => {
      process.exit()
    })
  })
  process.on("SIGTERM", error => {
    exit("SIGTERM").then(() => {
      process.exit()
    })
  })
}
