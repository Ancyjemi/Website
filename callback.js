// function success() {
//   console.log("Success");
// }
// function fail() {
//   console.log("Fail");
// }
// function error() {
//   console.log("Error");
// }
// function exec(data, callback) {
//   if (data) {
//     console.log(`Balanance:${data}`);
//   }
//   setTimeout(callback, 2000);
// }
// function trigger() {
//   const data = 500;
//   if (data > 0) {
//     exec(data, success);
//   } else if (data <= 0) {
//     exec(data, fail);
//   } else {
//     exec("error", error);
//   }
// }
// trigger();
async function API() {
  try {
    const response = await fetch(
      "https://66e526de5cc7f9b6273c6b31.mockapi.io/register"
    );
    const data = await response.json();
    // console.table(response);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
  //   const response = await fetch(
  //     "https://66e526de5cc7f9b6273c6b31.mockapi.io/register"
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  //   const response = fetch(
  //     "https://66e526de5cc7f9b6273c6b31.mockapi.io/register"
  //   );
  // const data = response.json();
  // console.log(data);
  // return data;
}
// API();
// console.log(Apidata)
async function APIDATA() {
  const apidata = await API();
  //   console.log(apidata);
  //   const structuredata = apidata.map((data) => {
  //     console.log(data);
  //   });
  const activeuser = apidata.filter((register) => register.isActive == false);
  console.log(activeuser);
}
APIDATA();
