//控制台播放测试
let fs = require('fs');
let i = 1;
let data ={};
fs.readFile('c.js',function(e,d){
  if(e){
    console.log(e);
  }else{
    data = eval(`(${d})`);
    play(1);
  }
})

function play(i){
    let _tmp = DunzipA(data[""+i]);
    console.log(_tmp);
    i++;
    play(i);
}

function DunzipA(str){
  let rx = /\leiA|\leiB|\leiC|\leiD|\leiE|\leiF|\leiG/g
  str = str.replace(rx,function (MatchStr) {
      switch (MatchStr) {
          //101
          case "leiA":
              return "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;";
              break;
          //64
          case "leiB":
              return "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;";
              break;
          //32
          case "leiC":
              return "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;";
              break;
          //16
          case "leiD":
              return "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;";
              break;
          //8
          case "leiE":
              return "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;";
              break;
          //4
          case "leiF":
              return "&ensp;&ensp;&ensp;&ensp;";
              break;
          //2
          case "leiG":
              return "&ensp;&ensp;";
              break;
          default:
              break;
      }
  });
  return DunzipB(str);
}

function DunzipB(str) {
  let rx = /\mrA|\mrB|\mrC|\mrD|\mrE/g
  str = str.replace(rx,function (MatchStr) {
      switch (MatchStr) {
          //101
          case "mrA":
              return "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM";
              break;
          //64
          case "mrB":
              return "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM";
              break;
          //32
          case "mrC":
              return "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM";
              break;
          //16
          case "mrD":
              return "MMMMMMMMMMMMMMMM";
              break;
          //8
          case "mrE":
              return "MMMMMMMM";
              break;
          default:
              break;
      }
  });
  return str;
}
