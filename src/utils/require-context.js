module.exports = function(directory, recursive, regExp) {
    var dir = require('node-dir')
    var path = require('path')
  
    // Assume absolute path by default
    var basepath = directory
    console.log(directory)
    console.log(path.isAbsolute(directory))
    if (directory[0] === '.') {
      // Relative path
        console.log('......')
      basepath = path.join(__dirname, directory)
    } else if (!path.isAbsolute(directory)) {
      // Module path
        console.log('isAbsolute')
      basepath = require.resolve(directory)
    }
  console.log('require-context')
    var keys = dir
      .files(basepath, {
        sync: true,
        recursive: recursive || false
      })
        .filter(function (file) {
          console.log(file)
        return file.match(regExp || /\.(json|js)$/)
      })
        .map(function (file) {
            console.log(file)
            // console.log(path.join('.', file.slice(basepath.length)))
        return path.join('.', file.slice(basepath.length))
        // return path.join('.', file.slice(basepath.length + 1))
      })
    var context = function (key) {
      return require(context.resolve(key))
    }
  
    context.resolve = function(key) {
      return path.join(directory, key)
    }
  
    context.keys = function() {
      return keys
    }
    return context
  }
  