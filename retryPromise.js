/**
 *
 * 沒做完, 待改進
 *
 */

/**
 * @param {() => Promise<any>} fetcher
 * @param {number} retryCount
 * @return {Promise<any>}
 */
async function retryPromise(fetcher, retryCount) {
  const fn = (resolve, reject) => {
    Promise.resolve(fetcher)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (retryCount > 0) {
          console.log("count: ", retryCount);
          fn(resolve, reject);
          retryCount -= 1;
        } else {
          reject(err);
        }
      });
  };

  return new Promise((resolve, reject) => {
    fn(resolve, reject);
  });
}

// 使用範例
async function fetchData() {
  // 模擬一個可能會失敗的網絡請求
  if (Math.random() < 0.8) {
    throw new Error("Fetch failed");
  }
  return "Data fetched";
}

retryPromise(fetchData, 3)
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.log("Failed:", error);
  });

//  retry(Promise.reject('has err'), 3).then(res => console.log(res))
