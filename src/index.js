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
// function sayHello() {
//   return "こんにちは！";
// }

// const month = 1;
// const message = `皆さん${sayHello()}。今日から${month * 3}月です。`;

// console.log(message);

//従来の関数(使用例１)

// function func1(value) {
//   return value;
// }
// console.log(func1("func1です。"));

// //従来の関数(使用例2)
// //宣言した関数を変数に格納してから使用する。
// const func2 = function (value) {
//   return value;
// };
// console.log(func2("func2です。"));

//アロー関数
// const func3 = (value) => {
//   return value;
// };
// console.log(func3("func3です。"));

//アロー関数の省略記法
//引数が１つなので、かっこを省略
// const func4 = (value) => {
//   return value;
// };
// console.log(func4("あああ"));

// //引数が２つ以上の時は、かっこで囲む
// const func5 = (value1, value2) => {
//   return value1 + value2;
// };
// console.log(func5(1, 2));

// //returnの省略
// //処理が単一行で返すので、{}を省略
// const func6 = (num1, num2) => num1 + num2;
// console.log(func6(10, 20));

// //返却値が複数の時
// //()を用いて１行としてまとめる
// const func7 = (val1, val2) => ({
//   name: val1,
//   age: val2
// });
// console.log(func7("田中", 24));

//分割代入
//分割代入を使用しない文字列の出力
// const myProfile = {
//   name: "田中",
//   age: 24
// };
// const message = `私の名前は、${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message);

//分割代入を使用した文字列の出力
//一部のみ取り出したり、順番が入れ替わっても表示可能らしい。。。
// const myProfile = {
//   name: "田中",
//   age: 24
// };
// const { name, age } = myProfile;
// const message = `私の名前は、${name}です。年齢は${age}です。`;

// console.log(message);

//抽出したプロパティに別名をつける
const myProfile = {
  name: "田中",
  age: 24
};

const { name: newName, age: newAge } = myProfile;
const message = `私の名前は、${newName}です。年齢は${newAge}歳です。`;

console.log(message);

//配列の分割代入
//順番の入れ替えはできない。。。
const NorioProfile = ["のりお", 27];
const [myname, myage] = NorioProfile;

const mymessgae = `私の名前は、${NorioProfile[0]}です。年齢は${NorioProfile[1]}歳です。`;
console.log(mymessgae);
