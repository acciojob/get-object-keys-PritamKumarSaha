//your JS code here. If required.
const student = {
	name: "Pritam"
};

Object.prototype.getKeys = function() {
	return Object.keys(this);
};

const keyArray = student.getKeys();

console.log(keyArray);

