var student = require('./student.js');
var prompt = require('prompt');
var fs = require('fs');

//console.log("bus is loaded");
////////
////////

var bus = function(driverName, color, gas){
 	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(){
			prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
  			var newStudent = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
  			
  			// fs.appendFile('log.txt', newStudent, 'utf8', function (err) {
  			// 	if (err) return console.log(err);
					// });

  			console.log(newStudent);
  			this.studentsOnTheBus.push(newStudent);
	});
		};
		
	this.busChatter = function(){
		//console.log("busChatter");
		for(var i = 0; i < this.studentsOnTheBus.length; i++){
			if (student.canStudentHaveFun){
						console.log(this.studentsOnTheBus[i].student.name + " catch phrase: " + this.studentsOnTheBus[i].student.catchPhrase);
					}
		}
	}
};


module.exports = bus;