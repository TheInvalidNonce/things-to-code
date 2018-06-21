// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".



const sortByString = (s, t) => {
	// Sort the letters in the string s by the order they occur in the string t
	let newStr = ''
	let hashCount = {}

	// Get a count of the letters in the word
	for (let i of s) {
		if (hashCount[i]) {
			console.log(hashCount)
			hashCount[i] += 1
		}
		else {
			console.log(hashCount)
			hashCount[i] = 1
		}
	}
// For each letter of the t string
// If there is an existing letter count
// Create a new string where it repeats on the hash of the order of the letters from t
	for (let j of t) {
		if (hashCount[j]) {
			console.log(hashCount)
			newStr += j.repeat(hashCount[j])
			console.log(newStr)
		}
	}

	return newStr
}

let s = "weather" 
let t = "therapyw"

sortByString(s, t)

let x = 'good'
let y = 'odg' 

sortByString(x, y)




// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

const decodeString = s => {
	//regex allows you to capture innermost group
	let regexRule = /(\d*)(?:\[)([a-z]*)(?:\])/




	// return s
}

let a = '4[ab]'
let b = '2[b3[a]]'

decodeString(a)
decodeString(b)

// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢