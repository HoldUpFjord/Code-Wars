//brute force
async function sleep(millis) {
    return new Promise(resolve => {
       setTimeout(() => {
         resolve('resolved');
       }, millis);
     });
   }


   // one liner, faster
   async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}