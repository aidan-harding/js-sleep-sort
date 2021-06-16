function sleeper(value) {
    return new Promise(resolve => setTimeout(() => resolve(value), value * 100));
}

async function sleepSort(toSort) {
    const result = [];
    return Promise.all(toSort.map(value => sleeper(value).then(() => result.push(value))))
        .then(() => result);
}

(async() => {
    const result = await sleepSort([5, 4, 3, 6, 1]);
    console.log(result);
})();