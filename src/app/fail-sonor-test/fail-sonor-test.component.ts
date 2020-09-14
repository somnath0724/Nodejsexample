import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fail-sonor-test',
  templateUrl: './fail-sonor-test.component.html',
  styleUrls: ['./fail-sonor-test.component.css']
})
export class FailSonorTestComponent implements OnInit {

  constructor() { 
    // Comment out the below to pass the sonar tests


    // // The password variable is meant to fail Sonorqube's Security Hotspot
    // let password = "password"

    // // The codeSmellFail varible will fail the code smell test for using "!=" when "!==" should be used
    // let codeSmellFail = 1 != Math.floor(Math.random() * 10) + 1;;

    // // The alert will fail the vulnerability test in Sonorqube
    // alert("This should fail the vunerability tests!")

    // // This will fail Sonerqubes bug test because there is no "else" following the "else if" statment
    // if (codeSmellFail) {
    //   console.log("success")
    // } else if (!codeSmellFail) {
    //   console.log("fail");
    // }

    // Comment out to here to pass the sonar tests
  }

  ngOnInit() {
  }

}
