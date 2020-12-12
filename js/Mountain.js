'use strict';

class Climber {
	constructor(climberName,climberAddress) {
		this.name = climberName;
		this.address = climberAddress;
	}

	set name(climberName) {
    	if (climberName.length < 3) throw new Error('Короткое имя альпиниста');
    	this._name = climberName;
    }

    get name() {
    	return this._name;
    }

    set address(climberAddress) {
    	if (climberAddress.length < 5 ) throw new Error('Короткий адрес альпиниста');
    	this._address = climberAddress; 
    }
    
    get address() {
    	return this._address;
    }
}


class Mountain {
	constructor(mountainName, mountainCountry, mountainHeight) {
		this.name = mountainName;
		this.country = mountainCountry;
		this.height = mountainHeight;
	}

	set name(mountainName) {
    	if (mountainName.length < 4) throw new Error('Короткое имя горы');
    	this._name = mountainName;
    }

    get name() {
    	return this._name;
    }

    set country(mountainCountry) {
    	if (mountainCountry.length < 4 ) throw new Error('Страна должна быть больше 4х букв');
    	this._country = mountainCountry; 
    }
    
    get country() {
    	return this._country;
    }

    set height(mountainHeight) {
    	if (mountainHeight < 100 ) throw new Error('Высота горы должна быть не менее 100');
    	this._height = mountainHeight; 
    }
    
    get height() {
    	return this._height;
    }
}

class Group {

	constructor(groupRec, mountName) {
		this.grouprec = groupRec;
		this._mountain = mountName;
	}
	_climbers = [];
	addClimber(climber) {
		if (this._grouprec) this._climbers.push(climber);
		else console.log('в группе нет мест');

	}
	get climbers() {
    	return this._climbers;
    }

    set grouprec(groupRec) {
        this._grouprec = groupRec;
    }

    get grouprec() {
        return this._grouprec;
    }

}


export {Climber, Mountain, Group};