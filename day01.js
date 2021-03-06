const rawInput = String.raw`130762
108691
131618
138163
59967
130453
117515
115776
134083
86966
128075
55569
112843
97878
92330
70917
143903
81171
148506
141379
131161
88719
69654
82141
55265
75623
97408
105269
147378
126054
133962
60304
130503
138350
93164
69661
69271
100054
138295
142865
64142
123466
80101
149696
102510
129988
87742
106785
133039
59192
86544
124950
64242
80128
109287
129634
140335
118220
106819
97296
111003
103222
54192
103548
63861
140571
50476
100570
114065
110279
64720
91941
62312
80834
132969
51973
115887
68662
138266
107234
75795
81409
78610
112587
92384
111804
138861
79393
81285
131307
68815
54976
127529
103359
138537
79663
128097
56085
96504
119501
`;

const rawArray = rawInput.split("\n");

const part1 = () => {
  const exampleInput = ["12", "14", "1969", "100756"];

  const inputArray = rawInput.split("\n");

  const fuelValues = inputArray.map(x => {
    const y = parseInt(x);
    const step1 = y / 3;
    const step2 = Math.floor(step1);
    const step3 = step2 - 2;
    return step3;
  });

  let totalFuel = 0;
  fuelValues.forEach(v => {
    !isNaN(v) ? (totalFuel += v) : null;
  });

  return totalFuel;
};

// console.log(part1());
// end part one

// part 2!
const part2 = () => {
  const examples = [14, 1969, 100756];
  let total = 0;

  const calcFuelNeeded = inputWeight => {
    const result = Math.floor(parseInt(inputWeight) / 3) - 2;

    if (result > 0) {
      total += result;
      calcFuelNeeded(result);
    } else {
      return total;
    }
    return result;
  };

  rawArray.forEach(ex => calcFuelNeeded(ex));
  return total;
};

console.log(part2());
