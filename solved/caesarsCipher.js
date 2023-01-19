/* //! CAESARS CIPHER
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. 
Do not transform any non-alphabetic character (i.e. spaces, punctuation),
 but do pass them on.

TESTS: 
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
const alphabet = () => {
	const codes = Array.from(Array(26)).map((e, i) => i + 65);
	return codes.map((x) => String.fromCharCode(x).toUpperCase());
};

function rot13(str) {
	const letters = alphabet();
	const cipher = alphabet().slice(13).concat(alphabet().slice(0, 13));
	const decodedWords = str.split(" ").map((word) => {
		const decodedWord = word.split("").map((letter) => {
			const decodedLetter = letters[cipher.indexOf(letter)];
			return decodedLetter ? decodedLetter : letter;
		});
		return decodedWord.join("");
	});
	return decodedWords.join(" ");
}

rot13("SERR PBQR PNZC");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
