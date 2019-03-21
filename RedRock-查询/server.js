/*
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
*/


var http = require('http');
var fs = require('fs');


function handle_request(req, res) {

    // 不管是什么请求，对文件的请求的话，应该是针对后缀名进行内容读取发放。
    var suffix = req.url.substr(req.url.length - 4, req.url.length);
    var realpath = __dirname + '\\' + 'public' + '\\';
    var filename = req.url.substr(req.url.length - 9);
    if (suffix === '.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(get_file_content(realpath + '\\css\\' + filename));
    } else if (suffix === '.jpg') {
        res.writeHead(200, {'Content-Type': 'image/JPG'});
        res.end(get_file_content(realpath+'\\imgs\\top_img.jpg'));
    } else if (suffix === '.gif') {
        res.writeHead(200, {'Content-Type': 'image/GIF'});
        res.end(get_file_content(realpath+'\\imgs\\bottle.gif'));
    } else if (suffix === '.png') {
        res.writeHead(200, {'Content-Type': 'image/PNG'});
        res.end(get_file_content(realpath+'\\imgs\\pencil.png'));
    } else if (suffix === '.svg') {
        res.writeHead(200, {'Content-Type': 'svg'});
        res.end(get_file_content(realpath+'\\font\\HanYiTiaoTiao.svg'));
    } else if (suffix === '.ttf') {
        res.writeHead(200, {'Content-Type': 'ttf'});
        res.end(get_file_content(realpath+'\\font\\HanYiTiaoTiao.ttf'));
    } else if (suffix === '.woff') {
        res.writeHead(200, {'Content-Type': 'WOFF'});
        res.end(get_file_content(realpath+'\\font\\HanYiTiaoTiao.woff'));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(get_file_content(__dirname + '\\' + 'html' + '\\' + 'index.html'));
    }
}

function get_file_content(filepath) {
    return fs.readFileSync(filepath);
}

var server = http.createServer(handle_request);
server.listen(8080);
