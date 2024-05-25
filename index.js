let unko = 'Hello world!';
//unko = 'Hello world2!!';
//console.log(unko);
const bigUnko = 'he..hello world';
//bigUnko = 'hibana';
//console.log(bigUnko);
let inko = [`いーち`,`にーい`,`さーん`,`ダー！！`];
//console.log(inko[0]);
//let index = 0;
//while (index < inko.length){
  //console.log(inko[index]);
  //index++;
//}


const test = (arg) => {
  if(inko.length > arg){
    console.log(`ボンバイエ`);
  }else{
    console.log(`ボンバ・・`);
  }
}
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log(`Hello`);
  }
};
console.log(unko2.color);
console.log(window.innerHeight);
console.log(window.innerWidth);
window.alert(`Hello world`);
document.getElementsByTagName(`button`)[0].addEventListener