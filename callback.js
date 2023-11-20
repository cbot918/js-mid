// ((fn, val, wait) => {
//   console.log("A");
//   fn(val, wait);
// })(lazyPrint, "B", 2000);

// function lazyPrint(val, wait) {
//   setTimeout(() => {
//     console.log(val);
//   }, wait);
// }

/////////////////////////////

// (async () => {
//   console.log("1");
//   await wait(2000);
//   console.log("2");
// })();

// function wait(sleep) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, sleep);
//   });
// }

//////////////////////////////

// function FN(val, fn) {
//   console.log(val);
//   fn();
// }

// FN("A", () => {
//   console.log("B");
// });

function FN(val, callback) {
  setTimeout(() => {
    if (val === "error") {
      callback(new Error(" input error "), null);
    } else {
      callback(null, val);
    }
  }, 1000);
}

FN(1, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  data += 1;

  FN(data, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    data += 1;

    FN(data, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
      data += 1;
    });
  });
});

// function fn(val) {
//   return new Promise((resolve, reject) => {
//     FN(val, (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// }

// fn(1).then((data) => {
//   console.log(data);
//   data += 1;
//   return FN(data);
// });

// const p1 = new Promise((resolve, reject) => {
//   console.log("create a promise");
//   resolve("成功了");
// });

// console.log("after new promise");

// const p2 = p1.then((data) => {
//   console.log(data);
//   throw new Error("失败了");
// });

// const p3 = p2.then(
//   (data) => {
//     console.log("success", data);
//   },
//   (err) => {
//     console.log("faild", err);
//   }
// );
