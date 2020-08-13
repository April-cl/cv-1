let CodeArea = document.querySelector("#CodeArea");
let style = document.querySelector("#style");

let string = `
/* 
 * Hello 艾瑞巴蒂
 * 现在我们来画一个会动的八卦图
 * 首先要给我一个div用来当效果展区
 */
#DisplayArea {
  border: 1px solid red;
  width: 300px;
  height: 300px;
  position: relative;
}
/* 
 * 接下来我要在展区画一个圆
 */
#BaguaMap {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
/* 
 * 画出黑白无极
 */
#BaguaMap {
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#BaguaMap::before {
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#BaguaMap::after {
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
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
  }, 10);
};

step();
