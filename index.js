function capitalize(a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
}

function reverse(a) {
    return a.split("").reverse().join("");
}

module.exports =  {
    capitalize: capitalize,
    reverse: reverse,
};