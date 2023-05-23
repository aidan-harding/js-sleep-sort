import generateRandoms from './generate_randoms.mjs'

const SLEEP_MULTIPLE = 200;
const MAX_VALUE = 50;
const NUMBER_OF_ITEMS = 50;

function sleeper(value) {
    return new Promise(resolve => setTimeout(() => resolve(value), value * SLEEP_MULTIPLE));
}

async function sleepThenAddToResult(result, value) {
    return sleeper(value).then(() => {
        result.push(value);
        console.error(...result);
    });
}

async function sleepSort(toSort) {
    const result = [];
    return Promise.all(toSort.map(value => sleepThenAddToResult(result, value)))
        .then(() => result);
}

(async() => {
    const result = await sleepSort(Array.from(generateRandoms(NUMBER_OF_ITEMS, MAX_VALUE)));
    console.log(...result);
})();