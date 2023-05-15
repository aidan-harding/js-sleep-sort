import generateArray from './generate_array.mjs'

const SLEEP_MULTIPLE = 200;
const MAX_VALUE = 50;
const NUMBER_OF_ITEMS = 50;

async function sleepAndAddToArray(thisValue, result) {
    return new Promise(resolve => setTimeout(
        () => {
            result.push(thisValue);
            console.error(...result);
            resolve()
        },
        thisValue * SLEEP_MULTIPLE
    ));
}

(async() => {
    const input = Array.from(generateArray(NUMBER_OF_ITEMS, MAX_VALUE));
    const promises = [];
    const result = [];

    for(const thisValue of input) {
        promises.push(sleepAndAddToArray(thisValue, result));
    }

    await Promise.all(promises);
    console.log('Done!')
    console.log(...result);
})();