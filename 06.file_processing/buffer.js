let buffer = new Buffer('abc\r\nddasdasd\r\nlaksjdfl');

// console.log(buffer.indexOf('\r\n'));
// console.log(buffer.slice(0, 3).toString());

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

bufferSplit(buffer, '\r\n').map((item) => {
  console.log(item.toString());
});
