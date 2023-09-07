function changeWord(selectedText, changedText, text) {
  // Memecah teks menjadi array kata-kata
  const words = text.split(" ");

  // Membuat array baru untuk menampung kata-kata yang sudah diganti
  const newWords = [];

  // Mengganti kata yang sesuai dan memasukkannya ke dalam array baru
  for (let i = 0; i < words.length; i++) {
    if (words[i] === selectedText) {
      newWords.push(changedText);
    } else {
      newWords.push(words[i]);
    }
  }

  // Menggabungkan kembali array kata-kata menjadi teks baru
  const newText = newWords.join(" ");
  return newText;
}

const kalimat1 = "andini sangat mencintai kamu selamanya";
const kalimat2 =
  "gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
