var readline = require('readline');  
var fs = require('fs');  
var os = require('os');  
  
/*fs.readFile('./a.txt','utf-8',function(err,data){  
    if(err){  
        console.error(err);  
    }  
    else{  
        console.log(data);  
    }  
});  */

String.prototype.replaceAll = function(s1,s2){   
   return this.replace(new RegExp(s1,"gm"),s2);   
}
 

var data = fs.readFileSync('./Response.readline.txt');
var text = data.toString();
var i = text.indexOf('h t t p : ');
console.log(i)
var j = text.indexOf('&quot;,&quot;source_url&quot;');
var url = text.substr(i, j-i);
url = url.replaceAll('content_url&quot;:&quot;','');
url = url.replaceAll('amp;amp;','')
url = url.replaceAll('\\\\','')
console.log(url)  
  
/*var fReadName = './Response.txt';  
var fWriteName = './Response.readline.txt';  
var fRead = fs.createReadStream(fReadName);  
var fWrite = fs.createWriteStream(fWriteName);  
  
var objReadline = readline.createInterface({ input: fRead });  
  
var text = [];
objReadline.on('line', (line)=>{
	console.log('--------------------------------------')
	text.push(line)
	fWrite.write(line)
});  
  
objReadline.on('close', ()=>{
    console.log('end');  
}); */