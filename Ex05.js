let department = "CS"

let obj = {
    name : "lee",
    job : "Assistant Professor",
    anotherobj : {
        first_name : "SungChul"
    },
    etc: function() {
        return this.name + " Department : " + department
    }
};

obj.anotherobj.last_name = "lee"

console.log(obj.name)
console.log(obj.job)
console.log(obj.anotherobj.first_name)
console.log(obj.anotherobj.last_name)
console.log(obj.etc())