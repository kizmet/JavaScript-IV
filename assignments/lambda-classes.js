// CODE here for your Lambda Classes
class Person {
	constructor (attr) {
		this.name = attr.name;
		this.age = attr.age;
		this.location = attr.location;
		this.gender = attr.gender;
	}
	speak(name,location) {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
	}
}

class Instructor extends Person {
	constructor (attr) {
		super(attr);
		this.specialty = attr.specialty
		this.favLanguage = attr.favLanguage;
		this.catchPhrase = attr.catchPhrase;
	}
	demo (subject) {
		console.log(`Today we are learning about ${this.subject}`);
	}
	grade (student,subject) {
		console.log(`${student} receives a perfect score on ${subject}`);
	}
	print() {
		console.log()
	}

}


class Student extends Person {
	constructor (attrs) {
		super(attrs);
		this.previousBackground = attrs.previousBackground;
		this.className = attrs.className;
		this.favSubjects = attrs.favSubjects;
	}
	listsSubjects () {
		this.favSubjects.forEach(function(s) {
			console.log('Favorite Subject ' +s);
		})
		
	}
	PRAssignment (subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}
	sprintChallenge (subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}
	
}

class ProjectManager extends Instructor {
	constructor (attrs) {
		super(attrs);
		this.gradClassName = attrs.gradClassName;
		this.favInstructor = attrs.favInstructor;
	}
	standUp (channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
	}
	debugsCode (student) {
		console.log(`${this.name} debugs ${student.name}'s code on ${student.favSubjects[0]}`)
	}
}


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

// console.log(fred);
fred.demo('x');
fred.speak();
fred.grade('Bryant','coding');

const bryant = new Student({
  name: 'bryant',
  location: 'The Bay',
  age: 36,
  gender: 'male',	
  previousBackground: 'Marketing',
  className: 'Web20',
  favSubjects: ['Python', 'bash'],
});

// console.log(bryant);
bryant.speak();
bryant.listsSubjects();
bryant.PRAssignment('React');
bryant.sprintChallenge('JavaScript');

const ted = new ProjectManager({
  name: 'ted',
  location: 'Idaho',
  age: 26,
  gender: 'male',	
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,  
  gradClassName: 'Web02',
  favInstructor: 'Josh',
});

// console.log(ted);
ted.speak();
ted.standUp('#AfterHours');
ted.debugsCode(bryant);