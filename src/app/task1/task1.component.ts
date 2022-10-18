import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  myForm:any;
  courses:any = [ 'Select Course','Angular','React','SQL','API','Selenium','Java'];
  public student:any=[];
  showData: Boolean =false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fname:[''],
      lname:[''],
      age:[''],
      course:[''],
      gender:[''],
      qualification:['']  

  })
  }
  get f(){
    return this.myForm.controls;
  }


  onSubmitForm(){
    alert("Data Saved Successfully");
    console.log(this.myForm.value); 
    this.student.push(this.myForm.value);
    console.log(this.student);
    if (this.student.length > 0){
        this.showData=true;
    }
  }

  
  onDelete(i:any){
    console.log(i);
    // this.student.splice(1,2);
    this.student.splice(this.student.indexOf(i),1);
    
  }

  onEdit(i:any){
    console.log(i);
    // this.student.splice(2,0,1);
    this.student.splice(this.student.indexOf(i),0,this.myForm.value)

    
      
  
  
      
    
    
  }
  
}

