const statement = "I am a hard working person";
const splitArray = statement.split(" ");
const reversedArray = splitArray.reverse();

let reversedString = "";

for (const word of reversedArray) {
  reversedString += word + " ";
}
console.log(reversedString);
