import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  hobbies:string[]
  constructor() { }

  ngOnInit() {
    this.name = "雷神";
    this.age = 28;
    this.email = "fish@gmail.com";
    this.hobbies = ["看美女","YY","说：努力赚钱"]
  }
  onClick(){
    console.log("clicked")
    this.hobbies.push("new hobby")
  }
  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i<this.hobbies.length;i++){
      if(this.hobbies[0] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

}
