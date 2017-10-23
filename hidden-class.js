let a = {x:1, y:2, z:3};
let b = {x:1, y:2, z:3};

let c = Object.assign({}, a);

let d = {};
d.x = 1
d.y = 2
d.z = 3

class Shipe {
	constructor (x, y, z) {
		this.x = x
		this.y = y
		this.z = z
	}
}

const s1 = new Shipe(1, 2, 3)
const s2 = new Shipe(1, 2, 3)
const s3 = new Shipe(1, '2', 3)
const s4 = new Shipe(1, {}, 3)

console.log("a is", a);
console.log("b is", b);
console.log("c is", c);
console.log("d is", d);

console.log("s1 is", s1);
console.log("s2 is", s2);
console.log("s3 is", s3);
console.log("s4 is", s4);

console.log("a and b have same map:", %HaveSameMap(a, b));
console.log("a and c have same map:", %HaveSameMap(a, c));
console.log("a and d have same map:", %HaveSameMap(a, d));

console.log("s1 and s2 have same map:", %HaveSameMap(s1, s2));
console.log("s1 and s3 have same map:", %HaveSameMap(s1, s3));
console.log("s1 and s4 have same map:", %HaveSameMap(s1, s4));