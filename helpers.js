function countNums(arr) {
    return arr.reduce(function (allNums, next) {
        if (next in allNums) {
            allNums[next]++;
        }
        else {
            allNums[next] = 1;
        }
        return allNums;
    }, {});
};

function findMode(arr, count = 0, mostFrequent = '') {
    let countedNums = countNums(arr);

    for (let key in countedNums) {
        if (countedNums[key] > count) {
            mostFrequent = key;
            count = countedNums[key];
        }
    }

    return +mostFrequent;
}

function validateNumsArray(numsAsStrings, result = []) {
    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if (Number.isNaN(valToNumber)) {
            return new Error(
                `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
            );
        }

        result.push(valToNumber);
    }
    return result;
}

function findMean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
        return acc + cur;
    }) / nums.length
}

function findMedian(nums) {
    // sort and get the middle element

    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
        median = nums[middleIndex];
    }
    return median
}

module.exports = {
    countNums,
    findMode,
    findMean,
    findMedian,
    validateNumsArray
}