function main() {
    let t1 = ""
    let t2 = "1"
    let t3 = null
    let t4 = undefined
    let t5 = Symbol("1")

    console.log(checkBoolean(t1));
    console.log(checkBoolean(t2));
    console.log(checkBoolean(t3));
    console.log(checkBoolean(t4));
    console.log(checkBoolean(t5));
}

function checkBoolean(value) {
    if(value) {
        return true;
    } else {
        return false;
    }
}

main();