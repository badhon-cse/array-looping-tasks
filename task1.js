const colors = ["red", "blue", "green", "yellow", "orange"];
const reversed = [];

for (const color of colors) {
  reversed.unshift(color);
}

console.log(reversed);
