import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component{
  hobby:string|undefined;
  text:string="hobby1";

  nonVisible:boolean=true;

  

  EditClick():void{
    this.nonVisible = false;  
  }

  SaveClick():void{
    this.hobby=this.text;
    this.nonVisible=true;
  }

  constructor(){
    this.hobby=this.text;
  } 
  
}
