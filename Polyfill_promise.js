let p = new Promise((resolve, reject) => {
  //reject("Error is defined");
  resolve(10);
});

// p.then((data)=>{
//   console.log("promise result",data);
// }).catch((err)=>{
//   console.log(err);
// }).finally(()=> {
//     console.log("Finally is called");
// });

class myPromise {
  state = "pending";
  value;
  resolveFn = [];
  rejectFn = [];
  constructor(executor) {
    const resolve = (data) => {
      //console.log("The resolve method is called", data);
      this.state = "fulfilled";
      this.value = data;
      this.callbackToExecute();
    };

    const reject = (error) => {
      //console.log("The reject method is called", error);
      this.state = "rejected";
      this.value = error;
      this.callbackToExecute();
    };
    executor(resolve, reject);
  }
  callbackToExecute = function () {
    if (this.state === "fulfilled") {
      this.resolveFn.forEach((fn) => {
        fn.call(this, this.value);
      });
      this.resolveFn = [];
    }

    if(this.state === "rejected") {
      this.rejectFn.forEach((fn) => {
        fn.call(this, this.value);
      });
      this.rejectFn =[];
    }
  };
  then = function (onResolveCb, OnRejectCb) {
    return new myPromise((resolve, reject) => {
      this.resolveFn.push((data) => {
        try {
          if (onResolveCb) {
            resolve(onResolveCb(data));
          } else {
            resolve(data);
          }
        } catch (err) {
          reject(err);
        }
      });
      this.rejectFn.push((error) => {
        try {
          if (OnRejectCb) {
            resolve(OnRejectCb(error));
          } else {
            reject(error);
          }
        } catch (err) {
          reject(error);
        }
      });
      this.callbackToExecute();
    });
  };
   
  catch = function(onRejectcb) {
   return this.then(undefined, onRejectcb);
  }

  finally = function(onFinallyCb) {
      this.catch(undefined, onFinallyCb);
      return this.then(onFinallyCb, undefined);
  }

}

let p1 = new myPromise((res, rej) => {
  setTimeout(()=>{
    res(10);
  }, 100)

});

p1.then((data) => {
  console.log("Then is called", data);
  return 2 * data;
}).then((data1) => {
  console.log("Another Then is called", data1);
}).catch((errorData)=> {
  console.log("catch is called", errorData);
})
