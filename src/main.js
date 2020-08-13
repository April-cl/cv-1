let CodeArea = document.querySelector("#CodeArea");
let DisplayArea = document.querySelector("#DisplayArea");
let style = document.querySelector("#style");

let string = `
/* 
 * Hello 艾瑞巴蒂
 * 现在我们来画一个会动的八卦图
 * 首先要给我一个div用来当效果展区
 */
#DisplayArea {
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
`;
let string2 = "";
let n = -1;

let step = () => {
  setTimeout(() => {
    n = n + 1;
    if (string[n] === "\n") {
      string2 += "<br>";
    } else {
      string2 += string[n];
    }

    CodeArea.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    if (n < string.length - 1) {
      step();
    }
  }, 50);
};

step();
