function function1() {
  console.log("function1");
}
const function2 = () => {
  for (let i = 0; i < 5; i++) {
    console.log("function2");
  }
};
const function3 = () => console.log("function3");
function1();
function2();
function3();
