var student = require('./student.js');
var prompt = require('prompt');

//console.log("bus is loaded");

var bus = function(driverName, color, gas){
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(){
			var newStudent = new Student (result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
	  		this.studentsOnTheBus.push( newStudent);
		console.log(studentsOnTheBus);
		};
	this.busChatter = function(){
		for(var i = 0; i < this.studentsOnTheBus.length; i++){
			if (student.canStudentHaveFun){
						console.log(this.studentsOnTheBus[i].student.name + " catch phrase: " + this.studentsOnTheBus[i].student.catchPhrase);
					}
		}
	}
};


module.exports = bus;