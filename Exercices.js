//What the Code bellow returns?
const array = ["One", "Two",  "Three"];
array.unshift("Three"); //Adds element "Three" in the beginning.
array.splice(-1); //Remove from last positions of Array.
console.log(array); //Answer: [ 'Three', 'One', 'Two' ]

/* Write a function that returns the index of the string's first non-repeating character, solution must be O(n) complexity. Returns -1 if the array doesn’t have any non-repeating character
 *	Sample Input:
 *		word = "abcdcaf"
 *	Sample Output:
 *		1
 */
//Answer:
	const word = "abcdcaf";
	const firstNonRepeatedIndex = (word) => {  
        //i currentCounter
		for(let i = 0; i < word.length; i++){
            //Takes index of currentCharacter
			let character = word.charAt(i);
            //If indexOf currentCharacter == currentCounter && indexOf currentCharacter (after currentCounter+1) == 'not found'
			if(word.indexOf(character) == i && word.indexOf(character, i+1) == -1){
                console.log(character); //b
				return i;
			}
  		}
		return -1;
	}
	console.log(firstNonRepeatedIndex(word)); //1

//Repeat in elegant way without use conditions, loops fifty times “Hello World” and this have to work in any language.
//Answer:
function printHelloWorld(count){
    if(count > 0){
        console.log("Hello World");
        printHelloWorld(count -1);
    }
}
printHelloWorld(50);

/* In a competition, four different functions are observed. All the functions use a single for loop and within the for loop, same set of statements are executed. Consider the following for loops:
 * 	A) for(i = 0; i < n; i++)
 *	B) for(i = 0; i < n; i += 2)
 *	C) for(i = 1; i < n; i *= 2)
 *	D) for(i = n; i > -1; i /= 2)
 *	If n is the size of input(positive), which function is most efficient(if the task to be performed is not an issue)?
 *
*/
//Answer: C
/* Explanation:
 * A) for(i = 0; i < n; i++): This loop iterates n times. Its time complexity is O(n).
 * B) for(i = 0; i < n; i += 2): This loop iterates approximately n/2 times. Its time complexity is O(n/2) as well, but it performs roughly half the iterations of loop A.
 * C) for(i = 1; i < n; i *= 2): This loop iterates approximately log2(n) times. Its time complexity is O(log n).
 * D) for(i = n; i > -1; i /= 2): This loop iterates approximately log2(n) times. Its time complexity is O(log n). It doesn't terminate.
 */

//Write a function that flattens an Array of Array objects into a flat Array. Our function must flatten any given array input:
//Examples: 
let a1 = [1, 2, [3, 4]]; //result: [1, 2, 3, 4]
let a2 = [1, 2, [3, 4, [5, 6]]]; //result: [1, 2, 3, 4, 5, 6]
let a3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]; //result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Answer:
const flatArray = (arrInput) => {
    const result = [];
    const handleFlat = (array) => {
        for(let i = 0; i < array.length; i++){
            const val = array[i];
            if (Array.isArray(val)) {
                handleFlat(val);
            } else {
                result.push(val)
            }
        }
    }
    handleFlat(arrInput);
    return result;
}
console.log(flatArray(a3));