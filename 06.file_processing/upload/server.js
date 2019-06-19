const http = require('http');
const fs = require('fs');

function bufferSplit(buffer, delimiter){
  let arr = [];
  let n = 0;

  while ((n = buffer.indexOf(delimiter)) !== -1){
    arr.push(buffer.slice(0, n));
    buffer = buffer.slice(n + delimiter.length);
  }

  arr.push(buffer);
  return arr;
}

function getBoundary(request){
  return '--' + request.headers['content-type']
    .split('; ')[1]
    .split('=')[1];
}

http.createServer((req, resp) => {
  // 请求提数据分割字段
  let boundary = getBoundary(req);

  let arr = [];
  req.on('data', (buffer) => {
    arr.push(buffer);
  });

  req.on('end', () => {
    let buffer = Buffer.concat(arr);

    let bufferList = bufferSplit(buffer, boundary);

    bufferList.pop();
    bufferList.shift();

    bufferList.forEach((temp) => {
      temp = temp.slice(2, buffer.length - 2);
      let n = temp.indexOf('\r\n\r\n');
      let info = temp.slice(0, n).toString();
      let data = temp.slice(n + 4);

      if (info.indexOf('\r\n') !== -1) {
        let res = info.split('\r\n')[0].split('; ')
        let name = res[1].split('=')[1];
        let filename = res[2].split('=')[1];

        name = name.substring(1, name.length - 1);
        filename = filename.substring(1, filename.length - 1);

        fs.writeFile(`./${filename}`, data, (error) => {
          if (error){
            console.log(error);
          }else{
            console.log('success')
          }
        })
      }else{
        let name = info.split('; ')[1]
          .split('=')[1];
        name = name.substring(1, name.length - 1);
      }

    })

  });

}).listen(8989);
