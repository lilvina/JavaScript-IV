// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name
    this.age = attributes.age
    this.location = attributes.location
    this.gender = attributes.gender
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes)
    this.speciality = attributes.speciality
    this.favLanguage = attributes.favLanguage
    this.catchPhrase = attributes.catchPhrase
  }
  demo(subject) {
    console.log(`${this.name} says: Today we are learning about ${subject}.`);
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes)
    this.previousBackground = attributes.previousBackground
    this.className = attributes.className
    this.favSubjects = attributes.favSubjects
  }
  listSubjects() {
    for(let i in this.favSubjects) {
      console.log(this.favSubjects[i]);
    }
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class PManager extends Instructor {
  constructor(attributes) {
    super(attributes)
    this.gradClassName = attributes.gradClassName
    this.favInstructor = attributes.favInstructor
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
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

const usagi = new Student({
  name: 'Usagi',
  location: 'Tokyo',
  age: '14',
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: 'I shall punish you!',
  className: 'WEB17',
  favSubjects: ['HTML, CSS, JavaScript'],
  grade: 0
})

const goku = new PManager({
  name: 'Goku',
  location: 'Planet Earth',
  age: '30',
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Fighting and eating',
  catchPhrase: 'I am Son Goku!',
  gradClassName: 'CS1',
  favInstructor: 'fred'
})

fred.demo('science')
usagi.listSubjects()
usagi.PRAssignment('media queries')
usagi.sprintChallenge('media queries')
goku.standUp('WEB17')
goku.debugsCode(usagi, 'media queries')
goku.speak()
