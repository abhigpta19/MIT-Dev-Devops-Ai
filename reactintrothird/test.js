function makeCounter(initialValue = 0) {
    let count = initialValue;

    function increament()
    {
        count++;
        return count;
    }

    function decreament()
    {
        count--;
        return count;
    }

    function reset()
    {
        count = initialValue;
        return count;
    }

    return { increament, decreament, reset };
}

const counter = makeCounter(5);

console.log(counter.increament());