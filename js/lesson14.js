'use strict';

import {Climber, Mountain, Group} from './Mountain.js'; 

console.log("Задача №1");
let climber1 = new Climber('Иван', 'ул. Ленина д. 12');
let climber2 = new Climber('Мария', 'ул. Пушкина д. 1');
let climber3 = new Climber('Антон', 'ш. Энтузиастов д. 5');

let mountain = new Mountain('Арарат','Армения', 4365);
let group = new Group(true, mountain);
group.addClimber(climber1);
group.addClimber(climber2);
group.addClimber(climber3);
group.grouprec = false;
console.log(group);

let mountain2 = new Mountain('Фудзи', 'Япония', 3776);
let group2 = new Group(true, mountain2);
group2.addClimber(climber1);
group2.addClimber(climber2);
console.log(group2);

let mountain3 = new Mountain('Килиманджаро', 'Африка', 5881);
let group3 = new Group(true, mountain3);
group3.addClimber(climber1);
group3.addClimber(climber3);
console.log(group3);

console.log("Задача №2");

import {Schoolboy, Teacher, School} from './School.js'; 

let schoolboy1 = new Schoolboy('Витя', 15, 'математика', 10);
let schoolboy2 = new Schoolboy('Коля', 14, 'физика', 8);
let schoolboy3 = new Schoolboy('Маша', 13, 'география', 15);
let schoolboy4 = new Schoolboy('Оля', 15, 'биология', 12);
let schoolboy5 = new Schoolboy('Костя', 13, 'русский язык', 18);
let schoolboy6 = new Schoolboy('Никита', 14, 'литература', 15);

let teacher1 = new Teacher('Валентина Андреевна', 32, 'физика');
let teacher2 = new Teacher('Владимир Николаевич', 36, 'математика');
let teacher3 = new Teacher('Алексей Павлович', 34, 'география');
let teacher4 = new Teacher('Зинаида Михайловна', 54, 'биология');
let teacher5 = new Teacher('Наталья Степановна', 44, 'русский язык');
let teacher6 = new Teacher('Мария Анатольевна', 38, 'литература');


let school = new School('№124');
school.addSchoolboy(schoolboy1);
school.addSchoolboy(schoolboy2);
school.addSchoolboy(schoolboy3);
school.addSchoolboy(schoolboy4);
school.addSchoolboy(schoolboy5);
school.addSchoolboy(schoolboy6);
school.addTeacher(teacher1);
school.addTeacher(teacher2);
school.addTeacher(teacher3);
school.addTeacher(teacher4);
school.addTeacher(teacher5);
school.addTeacher(teacher6);
console.log(`В школе ${school.name}  ${school.schoolboys.length} - учеников и ${school.teachers.length} - учителей`);
school.dayInSchool();
