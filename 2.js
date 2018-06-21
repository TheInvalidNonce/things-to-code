// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

const decodeString = str => {
	//regex allows you to capture innermost group
	let regexRule = /(\d*)(?:\[)([a-z]*)(?:\])/

  for (let i = 0; i < str.length; i++) {
    if (str.includes('[')) {
    	str = str.replace(regexRule, (match, amount, part) => part.repeat(amount));
  }
}
  return str
}

let a = '4[ab]'
let b = '2[b3[a]]'

decodeString(a)
decodeString(b)