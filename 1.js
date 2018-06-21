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
