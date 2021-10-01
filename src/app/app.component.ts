import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
  val:number=100;
  status:string="ganpati";

  buttonstatus=false;
  buttonmessage=" ";
  constructor(){
    setTimeout(()=>{
      this.buttonstatus=true;

    },5000);
  }
  onclickButton(event:Event){
    this.buttonmessage="welcome amgular js 7 to beginner";

  }
}
