function reverseWords(str){
	let modifiedWords=str.split(' ')
	let modifiedReversedWords = modifiedWords.map(item=>item.split('').reverse().join(''))
	alert(modifiedReversedWords)
}

reverseWords("This is an example!")

