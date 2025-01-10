function objectTo2DArray(obj) {
    const result = [];
    for (const [key, value] of Object.entries(obj)) {
        result.push([key, value]);
    }
    return result;
}

function calculate_closure(F, begin, logSteps = true) {
    console.log("begin", begin)
    let previousResult = "";
    let result = begin;
    while(previousResult !== result) {
        previousResult = result;
        for (const fd of F) {
            const key = fd[0];
            const value = fd[1];
            const chars = key.split("")
            const allCharsInResult = chars.every(char => result.includes(char));
            if (allCharsInResult) {
                const valueChars = value.split("");
                let res = result;
                valueChars.forEach(v => {
                    if (!result.includes(v)) {
                        result += v;
                        logSteps && console.log("result", result, ": ",  key + " -> " + value + " and " + key + " is in " + res)
                    }
                });
            }
        }
    }
    const formattedResult = result.split("").sort().join("");
    console.log("Final closure: " + formattedResult)
    return result.split("").sort().join("");
}

function strIsSubset(str1, str2) {
    const arr1 = str1.split("")
    const arr2 = str2.split("")
    if (arr1.length > arr2.length) {
        return false;
    }
    const map1 = {};
    const map2 = {};
    arr1.forEach(char => {
        map1[char] = (map1[char] || 0) + 1;
    }
    );
    arr2.forEach(char => {
        map2[char] = (map2[char] || 0) + 1;
    }
    );

    for (const [char, count] of Object.entries(map1)) {
        if (!map2[char] || map2[char] < count) {
            return false;
        }
    }
    return true;
}

function findSuperKeys(closureF, R) {
    const closureStrs = generateCombinations(R);
    console.log("closureStrs", closureStrs)
    for (let i = 0; i < R.length; i++) {
        closureStrs.push(R[i]);
    }
    const superKeys = [];
    for (const closureStr of closureStrs) {
        const closure = calculate_closure(closureF, closureStr, false);
        if (strIsSubset(R, closure)) {
            console.log("closureStr: ", closureStr + " is a super key of " + R)
            superKeys.push(closureStr);
        }
    }
    console.log(R + " superKeys: ", superKeys, " for F: ", closureF)
    return superKeys;
}

function generateCombinations(str) {
    const result = [];
    function recurse(prefix, remaining) {
        if (remaining.length === 0) {
            if (prefix.length > 0) {
                result.push(prefix);
            }
            return;
        }
        recurse(prefix + remaining[0], remaining.slice(1));
        recurse(prefix, remaining.slice(1));
    }

    recurse('', str);
    return result;
}

function computeLossless(mainR, R1, R2, FD) {
    let common = "";
    for (let i = 0; i < R1.length; i++) {
        if (R2.includes(R1[i])) {
            common += R1[i];
        }
    }
    const superKeys1 = findSuperKeys(FD, R1);
    const superKeys2 = findSuperKeys(FD, R2);
    if (superKeys1.includes(common) || superKeys2.includes(common)) {
        console.log(common + " in R1: " + superKeys1.includes(common) + ", in R2: " + superKeys2.includes(common))
        console.log("Lossless decomposition")
        return true
    }
    console.log("Lossy decomposition coudln't find " + common + " in R1: ", superKeys1, " or in R2: ", superKeys2)
    return false
}

function isDependencyPreserving(mainR, R1, R2, FD) {
    const closureR1 = calculate_closure(FD, R1, false);
    const closureR2 = calculate_closure(FD, R2, false);
    console.log("closureR1: ", closureR1, " closureR2: ", closureR2)    
    for (const [lhs, rhs] of FD) {
        if (!strIsSubset(lhs, closureR1) && !strIsSubset(lhs, closureR2)) {
            console.log(`Dependency ${lhs} -> ${rhs} is not preserved`);
            return false;
        }
    }
    console.log("Dependency preserving decomposition");
    return true;
}

// Example usage
const mainRelation = "ABC";
const decomposed1 = "AB";
const decomposed2 = "BC";
const functionalDependencies = [
    ['A', 'B'],
    ['B', 'C']
];

/* const result = isDependencyPreserving(mainRelation, decomposed1, decomposed2, functionalDependencies);
console.log('Is the decomposition dependency preserving?', result); */



const FD = [['AB', 'C'], ['B', 'A'], ['ABC', 'D'], ['D', 'EF']]
const fSuperKeyExample = [['A', 'BC'],
['CD', 'E'],
['B', 'D'],
['E', 'A']]
const rSuperKeyExample = "ABCDE" 


computeLossless("ABCDEF", "BCDE", "ABCF", FD)
// calculate_closure(closureF, closureStr)
/* findSuperKeys(fSuperKeyExample, rSuperKeyExample) */

/* const fff = [['A','B'],
    ['E','CGA'],
    ['C','DA'],
    ['CA','F'],
    ['F','CDGB'],
    ['CD','BF']]
const ccc = 'E'
calculate_closure(fff, ccc) */



