let movieObj = {
    n: this,
    name: "kalki",
    printTicket: function() {
      console.log(this);
      function inner1() {
          const inner = ()=>{
              console.log("Inside the inner function", this.name);
          }
          inner();
      }
  
      inner1();
     
    },
  };
  
  let movieObj1 = {
      n: this,
      name: "kalki 1",
      printTicket: function() {
        let obj2 = {
          name: "kalki 2",
           inner1: function () {
              const inner = ()=>{
                  console.log("Inside the inner function", this.name);
              }
              inner();
          }
        }
        obj2.inner1();
      },
    };
  
    let movieObj2 = {
      n: this,
      name: "kalki 1",
      obj2: {
          name: "kalki 2",
          inner: ()=> {
              console.log("Inside the inner function", this.name);
          }
        }
    };
  
    movieObj2.obj2.inner();