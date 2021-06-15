function sleeper(value) {
    return new Promise(resolve => setTimeout(() => resolve(value), value * 100));
}

async function sleepSort(values) {
    const result = [];
    return new Promise(
        resolve =>
        values.forEach((value) => sleeper(value).then((value) => {console.log(value); result.push(value); if(values.length === result.length) resolve(result);}))
    );
}

(async() => {
    const result = await sleepSort([5, 4, 3, 6, 1]);
    console.log('done');
    console.log(result);
})();