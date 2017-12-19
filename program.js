var fs = require('fs');

path = process.argv[2];

if(fs.existsSync(path)) {
  findMatchWords();
} else {
  incorrectPath();
}

function findMatchWords() {
  fs.readFile(path, 'utf8', function(err, contents) {
    words = contents.split('\n');
    frequencies = {};
    words.map(function(val) {
      frequencies[val.toLowerCase()] = val;
    });
    Object.keys(frequencies).forEach(function(key) {
      total_chars = frequencies[key].length;
      if(total_chars > 1){
        for(var i = 2; i < total_chars-2; i++){
          word1 = key.substring(0,i);
          word2 = key.substring(i,total_chars);
          if(frequencies[word1] != undefined && frequencies[word2] != undefined){
            console.log(frequencies[word1] + " + " + frequencies[word2] + " = " + frequencies[key]);
          }
        }
      }
    })
  });
}

function incorrectPath() {
  console.log("Incorrect Path! Please try again.");
}