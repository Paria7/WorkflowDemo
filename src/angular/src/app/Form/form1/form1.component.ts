import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  slsForm: FormGroup;

  constructor() { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    // this.slsForm=this.fb.group({
    //   UserServiceDescription:this.fb.group({});
    // })
  }


}
