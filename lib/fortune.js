var fortune = [
	'Conquer your fears or they will conquer you.',
	'Rivers need springs',
	'Do not feat what you dont know.',
	'You will have pleasent surprise.',
	'Whenever possible keep it simple.'
];

exports.getFortune = function(){
	var index = Math.floor(Math.random()* fortune.length);
	return fortune[index];
};