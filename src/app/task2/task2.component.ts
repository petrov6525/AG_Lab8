import { Component } from '@angular/core';
import { PeopleServise } from './people.servise';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
  providers: [PeopleServise]
})
export class Task2Component {
  item:string="";
  items:string[]=[];
  selectedItem:string|undefined;
  index:number=-1;
  isAdd:boolean=true;
  

  SaveClick(item:string):void{
    this.items[this.index] = item;
    this.peopleService.SetData(this.items);
    this.selectedItem=undefined;
    this.isAdd=true;
  }

  OnSelect(item:string,i:number):void{
    this.selectedItem = item;
    this.index = i;
    this.isAdd=false;
  }

  AddClick(name:string){
    this.peopleService.AddData(name);
    this.items=this.peopleService.GetData();
    this.item="";
  }

  constructor(private peopleService: PeopleServise){

  }
  ngOnInit(){
    this.items=this.peopleService.GetData();
  }
}
