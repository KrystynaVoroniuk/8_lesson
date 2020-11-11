const fs = require('fs');

function getFiles (dir, files_){
  files_ = files_ || [];
  let files = fs.readdirSync(dir);
  for (let i in files){
      let name = dir + '/' + files[i];
      if (fs.statSync(name).isDirectory()){
          getFiles(name, files_);
      } else {
          files_.push(name);
      }
  }
  return files_;
}
console.log(getFiles('D:/Christi/my-course/course-js/7_lesson(error)'));