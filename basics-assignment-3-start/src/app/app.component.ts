import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content=true;
  clickLog=[];
  changeContent(){
    this.content=!this.content;
    this.clickLog.push(this.clickLog.length+1);
  }
  isTrue(item){
    if(item>4){
      return true;
    }
    return false;
  }
  styleItem(item){
    if(this.isTrue(item)){
      return {'background-color':'blue'};
    }
  }
}
