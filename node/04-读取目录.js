var fs = require('fs')

fs.readdir('D:\nodejs\02\code', function (err, files) {
  if (err) {
    return console.log('目录不存在')
  }
  console.log(files)
})
