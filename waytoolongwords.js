var wordsCount = readline();

var words = [];

for (var i = 0; i < wordsCount; i++)
  words.push(readline());

for (var i = 0; i < words.length; i++) {
  var wordsLength = words[i].length;

  if (wordsLength > 10) {
    words[i] = words[i][0] + String(wordsLength-2) + words[i][wordsLength-1]
  }
  print(words[i])
}
