let CodeArea = document.querySelector("#CodeArea");
let DisplayArea = document.querySelector("#DisplayArea");

let string = `
/* Hello 艾瑞巴蒂
   现在我们来画一个会动的八卦图
*/
`;
let n = 0;

CodeArea.innerHTML = string.substring(0, n);

let step = () => {
  setTimeout(() => {
    n = n + 1;
    CodeArea.innerHTML = string.substring(0, n);
    if (n < string.length) {
      step();
    }
  }, 100);
};

step();
