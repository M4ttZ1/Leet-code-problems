/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const timeout = new Promise((resolve,reject)=> {setTimeout(() => resolve(1000), millis)})
    return timeout
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */