
class Human {
	constructor(humanName,humanAge,humanSubject) {
		this.name = humanName;
		this.age = humanAge;
		this.subject = humanSubject;
	}
	set name(humanName) {
		if ((typeof humanName) !== "string") throw new Error('Ошибка в имени'); 
    	this._name = humanName;
    }

    set age(humanAge) {
    	if (humanAge < 6) throw new Error(`${this.name}, тебе рано еше в школу`); 
    	this._age = humanAge; 
    }

    set subject(humanSubject) {
    	if (!(humanSubject)) throw new Error('Не указан предмет');  
    	this._subject = humanSubject; 
    }

    get name() {
    	return this._name;
    }

    get age() {
    	return this._age;
    }

    get age() {
    	return this._subject;
    }
}


class Schoolboy extends Human {
	constructor(name,age,subject,knowLevel) {
		super(name,age,subject);
		this._knowlevel = knowLevel;
	}
	learn() {
		return this._knowlevel += Math.floor(Math.random() * 10 + 1);
		
	}

	set knowlevel(value) {
		if (this._knowlevel <= 0) throw new Error(' хотя почему ошибка, в переферии 80% так учатся');  
	}

	get knowlevel() {
		return this._knowlevel;
	}
} 

class Teacher extends Human {
	teach(schoolBoy) {
		schoolBoy.learn();
	}
}

class School {

	_schoolboys = [];
	_teachers = [];

	constructor(schoolName) {
		this.name = schoolName;
	}

	addTeacher(teacher) {
		this._teachers.push(teacher);
	}
	

	addSchoolboy(schoolboy) {
		this._schoolboys.push(schoolboy);
	}
	
	dayInSchool() {
		for (let s of this._schoolboys) {
			for (let t of this._teachers) {
				if (s._subject === t._subject) console.log(`${t.name} обучил/а ${s.name} с ${s.knowlevel} до ${s.learn()} пунктов`);
			}
		}
	}



	set name(schoolName) {
		this._name = schoolName;
	}

	get name() {
    	return this._name;
    }

    get teachers() {
    	return this._teachers;
    }

    get schoolboys() {
    	return this._schoolboys;
    }
} 


export {Schoolboy, Teacher, School};