//var  foo="bar";
//console.log(foo);
<!--读文件-->
var fs=require('fs');
fs.readFile('./data/a.json',function(error,data){
    if(error){
    	console.log('读取文件失败');
    }
    else{
    	console.log(data.toString());
    }
});
<!--写文件-->
var fs=require('fs');
fs.writeFile('./data/hello.json','大家好，给大家介绍一下',function(error){
	if(error){
	  console.log("文件写入失败");
	}
	else{
		console.log("文件写入成功");
	}
});
<!--简单的http请求-->
//服务器http
//核心模块：http 帮你创建编写服务器

//1.加载http模块
var hp=require('http');
//2.创建web服务器，返回server实例
var server=hp.createServer();
//3.接受请求(注册require请求事件，档客户端请求，自动触发)
server.on('request',function(){
	console.log('收到服务器的请求了')
});
//4.绑定端口号，启动服务器
server.listen(3000,function(){
	console.log('服务器访问成功了，可以通过http://127.0.0.1:3000/访问了')
});
<!--发送请求-->
//1.加载http模块
var hp=require('http');
//2.创建web服务器，返回server实例
var server=hp.createServer();
//3.接受请求(注册require请求事件，档客户端请求，自动触发)
//request请求对象   Response响应对象（发送客户端）
server.on('request',function(request,response){
	console.log('收到服务器的请求了,请求路径为:'+request.url);
//	response.write('hello');
//	response.write('nodejs');
	response.end('你好 你是谁');
});
//4.绑定端口号，启动服务器
server.listen(80,function(){
	console.log('服务器访问成功了，可以通过http://127.0.0.1:80/访问了')
});





