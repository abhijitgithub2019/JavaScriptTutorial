let obj1 = {
  name: "abhi",
  age: 28,
  address: {
    pincode: 722101,
  },
  getName: function() {
    //return this.age;
  },
  data: [1,2,3]
};

let obj2 = {
  name: "abhi",
  age: 28,
  address: {
    pincode: 722101,
  },
  getName: function() {
    //return this.age*2;
  },
  data: [1,2,3]
};

function compare(o1, o2) {
  if (typeof o1 !== "object" && typeof o2 !== "object") return false;
  if (Array.isArray(o1)) {
     if(o1.length !== o2.length) return false;
    for (let i = 0; i < o1.length; i++) {
        // console.log("Inside an array", o1[i], o2[i]);
        if(typeof o1[i]=== 'object' && typeof o2[i] ==='object') {
            if (!compare(o1[i], o2[i])) return false;
        }
        if(o1[i]!== o2[i]) {
            return false;
        }
    }
    return true;
  } else {
    let propertyNames1 = Object.getOwnPropertyNames(o1);
    let propertyNames2 = Object.getOwnPropertyNames(o2);
    if (propertyNames1.length !== propertyNames2.length) return false;
    for (let p in o1) {
      switch (typeof o1[p]) {
        case "object":
          if (!compare(o1[p], o2[p])) {
            return false;
          } 
          break;
        case "function":
          if (typeof o2[p] !== 'function' || o1[p].call() !== o2[p].call()) return false;
          break;
        default:
          if (o1[p] !== o2[p]) {
            console.log(o1[p], o2[p]);
            return false;
          }
      }
    }
  }
  return true;
}

console.log(compare(obj1, obj2));
