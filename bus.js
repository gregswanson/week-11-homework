var Student = require('./student.js');
var prompt = require('prompt');
var fs = require('fs');

//console.log("bus is loaded");
////////
////////

var bus = function(driverName, color, gas){
 	var studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(){
		function getInfo(){
					prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase', 'add_another_student_yes_or_no'], function(err, result) {
						var resultName = result.name;
						var resultGender = result.gender;
						var resultGrade = result.grade;
						var resultGpa = result.gpa;
						var resultDetentions = result.detentions;
						var resultSleepingInClass = result.sleepingInClass;
						var resultCatchPhrase = result.catchPhrase;
						var answer = result.add_another_student_yes_or_no;
		  			
		  			var newStudent = new Student(resultName, resultGender, resultGrade, resultGpa, resultDetentions, resultSleepingInClass, resultCatchPhrase);
		  			
		  			studentsOnTheBus.push(newStudent);
		  			// fs.appendFile('log.txt', newStudent, 'utf8', function (err) {
		  			// 	if (err) return console.log(err);
							// });
					if (answer == 'yes') {
						getInfo();
					} else {
						//console.log(studentsOnTheBus);
						busChatter();
					}
		  		
			});
		}
			getInfo();
		};
		
	 var busChatter = function(){
		console.log(studentsOnTheBus.length);
		for(var i = 0; i < studentsOnTheBus.length; i++){
			if (studentsOnTheBus[i].canStudentHaveFun() == true){
						console.log(studentsOnTheBus[i].name + " catch phrase: " + studentsOnTheBus[i].catchPhrase);
						//console.log(studentsOnTheBus[i].canStudentHaveFun());
					}
		}
	}
};


module.exports = bus;