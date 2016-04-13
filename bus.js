var Student = require('./student.js');
var prompt = require('prompt');
var fs = require('fs');


//bus constructor

var bus = function(driverName, color, gas){
 	var studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;

//get names of students on the bus 
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

//push student objects to array  			
		  			studentsOnTheBus.push(newStudent);

//add another student		  			
					if (answer == 'yes') {
						getInfo();
					} else {
						
//else go to remove student function
						removeStudent();
					}
		  		
			});
		}

//run function		
			getInfo();
		};
		
//if the student is allowed to have fun, get thier catch phrase		
	 var busChatter = function(){
		for(var i = 0; i < studentsOnTheBus.length; i++){
			if (studentsOnTheBus[i].canStudentHaveFun() == true){
						console.log(studentsOnTheBus[i].name + " catch phrase: " + studentsOnTheBus[i].catchPhrase);
					}
		}
	};

//Bonus #1 remove student from bus
	var removeStudent = function(){

			prompt.get(['remove_a_student_yes_no', 'name_of_student_to_remove'], function(err, studentName) {
				 var removeAStudent = studentName.remove_a_student_yes_no;
				 var studentName = studentName.name_of_student_to_remove;

				 if (removeAStudent == 'yes') {

						 for (var i = 0; i < studentsOnTheBus.length; i++) {
						 	if (studentsOnTheBus[i].name == studentName) {
						 		 studentsOnTheBus.splice(i, 1);
						 	}
						 }

//run if more than one student needs to be removed						 
				prompt.get(['remove_another_student_yes_no'], function(err, removeAnotherStudent) {
					var removeAnother = removeAnotherStudent.remove_another_student_yes_no;
					if( removeAnother == 'yes'){
						removeStudent();
					} else {
						busChatter();
					}

				});

				 } else {

				 	busChatter();
				 }

			});		
	}

};

//make bus object available for export
module.exports = bus;