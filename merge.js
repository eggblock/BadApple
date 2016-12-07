//合并文件
//Html结构转字符串形式显示 支持<br>换行
let fs = require('fs');
let i = 1;
let name ='bad.js';
fs.writeFile(name,'{',{flag:'a'},function(err){
  if(err)console.log(err);
});
read(i);
function read(i){
  if(i<6575){
    fs.readFile('BadAppleText/'+i+'.html',function(err,data){
        if(err){
          read(i);
          console.log(i);
        }else{
          data = DzipA(data.toString());
          _data = `"${i}":\`${data}\`,`;
          console.log('正在合并：'+i);
          fs.writeFile(name,_data,{flag:'a'},function(err){
            if(err)console.log(err);
          });
          i++
          read(i);
        }
    });
  }else{
    setTimeout(function(){
      fs.writeFile(name,'"6575":""}',{flag:'a'},function(err){
          if(err)console.log(err);
        });
      },1500);
  }
}
/*fs.writeFile('g.json','6754:""}',{flag:'a'},function(err){
  if(err)console.log(err);
});*/

//Html结构转字符串形式显示
/*function toTXT(str) {
    var RexStr = /\&lt;|\`|\&gt;|\"|\&ensp;|\&|\&emsp|<br>|<br >/g
    str = str.replace(RexStr,function (MatchStr) {
        switch (MatchStr) {
            case "`":
                return "'";
                break;
            case "<br>":
                return " ";
                break;
            case "<br >":
                return " ";
                break;
            case "&lt;":
                return "<";
                break;
            case "&gt;":
                return ">";
                break;
            case "\"":
                return "'";
                break;
            case "&#39;":
                return "'";
                break;
            case "&amp;":
                return "&";
                break;
            case "&ensp;":
                return " ";
                break;
            case "&emsp;":
                return "  ";
                break;
            default:
                break;
        }
    });
    return str;
}*/
function DzipA(str){
  let rx = /\`|\r\n/g
  str = str.replace(rx,function (MatchStr) {
      switch (MatchStr) {
          case "`":
              return "'";
              break;
          case "\r\n":
              return "<br>";
              break;
          default:
              break;
      }
  });
  return DzipB(str);
}
function DzipB(str) {
  let rx = /\<br><br>|\<br>|\&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|\&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|\&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|\&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|\&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|\&ensp;&ensp;&ensp;&ensp;|\&ensp;&ensp;/g
  str = str.replace(rx,function (MatchStr) {
      switch (MatchStr) {
          case "<br><br>":
              return "\n";
              break;
          case "<br>":
              return "\n";
              break;
          //101
          case "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;":
              return "leiA";
              break;
          //64
          case "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;":
              return "leiB";
              break;
          //32
          case "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;":
              return "leiC";
              break;
          //16
          case "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;":
              return "leiD";
              break;
          //8
          case "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;":
              return "leiE";
              break;
          //4
          case "&ensp;&ensp;&ensp;&ensp;":
              return "leiF";
              break;
          //2
          case "&ensp;&ensp;":
              return "leiG";
              break;
          default:
              break;
      }
  });
  return DzipC(str);
}
function DzipC(str) {
  let rx = /\MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM|\MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM|\MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM|\MMMMMMMMMMMMMMMM|\MMMMMMMM/g
  str = str.replace(rx,function (MatchStr) {
      switch (MatchStr) {
          //101
          case "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM":
              return "mrA";
              break;
          //64
          case "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM":
              return "mrB";
              break;
          //32
          case "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM":
              return "mrC";
              break;
          //16
          case "MMMMMMMMMMMMMMMM":
              return "mrD";
              break;
          //8
          case "MMMMMMMM":
              return "mrE";
              break;
          default:
              break;
      }
  });
  return str;
}
