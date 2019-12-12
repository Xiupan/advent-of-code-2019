const rawString = String.raw`1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,5,19,23,2,9,23,27,1,27,5,31,2,31,13,35,1,35,9,39,1,39,10,43,2,43,9,47,1,47,5,51,2,13,51,55,1,9,55,59,1,5,59,63,2,6,63,67,1,5,67,71,1,6,71,75,2,9,75,79,1,79,13,83,1,83,13,87,1,87,5,91,1,6,91,95,2,95,13,99,2,13,99,103,1,5,103,107,1,107,10,111,1,111,13,115,1,10,115,119,1,9,119,123,2,6,123,127,1,5,127,131,2,6,131,135,1,135,2,139,1,139,9,0,99,2,14,0,0`;
const rawString2 = String.raw`1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,5,19,23,2,9,23,27,1,27,5,31,2,31,13,35,1,35,9,39,1,39,10,43,2,43,9,47,1,47,5,51,2,13,51,55,1,9,55,59,1,5,59,63,2,6,63,67,1,5,67,71,1,6,71,75,2,9,75,79,1,79,13,83,1,83,13,87,1,87,5,91,1,6,91,95,2,95,13,99,2,13,99,103,1,5,103,107,1,107,10,111,1,111,13,115,1,10,115,119,1,9,119,123,2,6,123,127,1,5,127,131,2,6,131,135,1,135,2,139,1,139,9,0,99,2,14,0,0`;
const rawArray = rawString.split(",").map(s => parseInt(s));
const rawArray2 = rawString2.split(",").map(s => parseInt(s));

const sample = [
  "1",
  "9",
  "10",
  "3",
  "2",
  "3",
  "11",
  "0",
  "99",
  "30",
  "40",
  "50"
];

const sampleAsInt = sample.map(s => parseInt(s));

const part1 = example => {
  let startingOpcodeIndex = 0;
  let opcodeIndicies = [0];

  // generates where all the opcodes are
  example.forEach((value, index) => {
    if (startingOpcodeIndex + 4 === index) {
      opcodeIndicies.push(index);
      startingOpcodeIndex = index;
    }
  });

  for (let index = 0; index < example.length; index++) {
    const value = example[index];

    if (opcodeIndicies.includes(index)) {
      let input1 = example[example[index + 1]];
      let input2 = example[example[index + 2]];
      let answerLocation = example[index + 3];
      if (value === 1) {
        example[answerLocation] = input1 + input2;
      } else if (value === 2) {
        example[answerLocation] = input1 * input2;
      } else if (value === 99) {
        break;
      }
    }
  }
  return example[0];
};

// part1(sampleAsInt);
// part1(rawArray2);
// console.log(part1(rawArray2));

module.exports = { part1 };
