import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//テンプレート文字列
//従来の文字列と変数の結合方法
// const name = "田中";

// const age = 24;

// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

//テンプレート文字列の応用
// const name = "田中";
// const age = 24;
// const message = `私の名前は、${name}です。年齢は${age}です。`;
// console.log(message);

//関数の呼び出しと計算の実行
function sayHello() {
  return "こんにちは！";
}

const month = 1;
const message = `皆さん${sayHello()}。今日から${month * 3}月です。`;

console.log(message);
