///
/// ```bash
/// node index.js
/// ```

console.log(`Hello Node.js v${process.versions.node}!`);
//
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent);
//*dangerously*
dom = new JSDOM(`<body>
  <div id="content"></div>
  <script>document.getElementById("content").append(document.createElement("hr"));</script>
</body>`, { runScripts: "dangerously" });

// The script will be executed and modify the DOM:
console.log(dom.window.document.getElementById("content").children.length); // 1
//*outside-only*
dom = new JSDOM(`<body>
  <div id="content"></div>
  <script>document.getElementById("content").append(document.createElement("hr"));</script>
</body>`, { runScripts: "outside-only" });

// run a script outside of JSDOM:
dom.window.eval('document.getElementById("content").append(document.createElement("p"));');

console.log(dom.window.document.getElementById("content").children.length); // 1
console.log(dom.window.document.getElementsByTagName("hr").length); // 0
console.log(dom.window.document.getElementsByTagName("p").length); // 1
//
const window = (new JSDOM(``, { pretendToBeVisual: true })).window;

window.requestAnimationFrame(timestamp => {
  console.log(timestamp > 0);
});