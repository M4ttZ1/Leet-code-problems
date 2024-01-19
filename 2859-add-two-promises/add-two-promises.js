/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
   const [nPromise1, nPromise2] = await Promise.all([promise1, promise2])
   const res = nPromise1 + nPromise2
   return res
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */