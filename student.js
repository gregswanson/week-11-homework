var prompt = require('prompt');


var Student = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
  this.name = name;
  this.gender = gender;
  this.grade = grade;
  this.gpa = gpa;
  this.detentions = detentions;
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase = catchPhrase;
  this.canStudentHaveFun = function(){
    if((this.detentions < 10) && (this.gpa > 2)){
      //console.log("This student can have fun!");
      return true;
    }else{
      //console.log("There will be no fun");
      return false;
    }
  };
};

//Prompt no resides in bus object
  // prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
  //   var student = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)
    
  //   student.canStudentHaveFun();

  // });

//make Student object available for export
module.exports = Student;