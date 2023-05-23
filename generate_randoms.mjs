export default function* generateRandoms(NUMBER_OF_ITEMS, MAX_VALUE) {
    for(let i=0; i < NUMBER_OF_ITEMS; i++) {
        yield Math.round(Math.random() * MAX_VALUE);
    }
}