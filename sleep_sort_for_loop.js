import generateRandoms from './generate_randoms.mjs'

const SLEEP_MULTIPLE = 200;
const MAX_VALUE = 25;
const NUMBER_OF_ITEMS = 25;

async function sleepAndAddToArray(thisValue, result) {
    return new Promise(resolve => setTimeout(
        function() {
            result.push(thisValue);
            console.error(...result);
            resolve();
        },
        thisValue * SLEEP_MULTIPLE
    ));
}

(async() => {
    const input = Array.from(generateRandoms(NUMBER_OF_ITEMS, MAX_VALUE));
    const promises = [];
    const result = [];
    console.log(`Input:\n${input.join(' ')}`);

    for(const thisValue of input) {
        promises.push(sleepAndAddToArray(thisValue, result));
    }

    await Promise.all(promises);
    console.log(`Done!\n${result.join(' ')}`);
})();