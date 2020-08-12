let CodeArea = document.querySelector("#CodeArea");
let DisplayArea = document.querySelector("#DisplayArea");

let string = `
/* Hello 艾瑞巴蒂
   现在我们来画一个会动的八卦图
*/
`;
let string2 = "";
let n = -1;

// string = string.replace(/\n/g, "<br>");    //使用正则表达式替换换行，有缺陷，会把<br打印出来

let step = () => {
  setTimeout(() => {
    n = n + 1;
    if (string[n] === "\n") {
      string2 += "<br>";
    } else {
      console.log(string[n]);
      string2 += string[n];
    }

    CodeArea.innerHTML = string2;
    if (n < string.length - 1) {
      step();
    }
  }, 100);
};

step();
