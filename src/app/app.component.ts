import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // template: `<p>merhaba</p>
  // <hr>
  // <div style="background-color: aqua;">
  // <app-home></app-home></div>
  // `,
  template: `
  <!-- property binding -->
  <!-- <input type="text" [value]="title"/>
  <app-home [pageName]="title"></app-home> -->

  <!-- two Way Data Binding -->
  <!-- <input type="text" [(ngModel)]="name" (ngModelChange)="onChange($event)"/><br/>
  <input type="text" [(ngModel)]="name"/><br/>
  {{name}} -->


  <!-- Interpolation Syntax -->
  <!-- {{title}}
  <p>{{person!.name}}</p> -->

  <!-- Directives -->
  <!-- <ul>
    <li *ngFor="let name of names;
                let index = index;
                let first = first">
                {{name}} - {{index}} - {{first}}
    </li>
  </ul> -->
  <!-- Directive ngIf -->
  <!-- <div *ngIf="visible; else elseContent">İçerik 1</div> -->
  <!-- <ng-template #elseContent>İçerik 2</ng-template> -->
  <!-- <div appExample color="blue">
    Merhaba
  </div> -->


  <!--Custom structural if directive -->
  <!-- <div *appCustomif="true">
    Merhaba
</div> -->

<!-- <ul>
  <li *appCustomfor="5; let i = index">Yiğit {{i}}</li>
</ul> -->
{{name | slice: 1:3}}
<br/>
{{"Bu pipe denemesidir..." | custom: 3:7}}

<!-- <ul>
  <li *appCustomfor="names; let name; let index = index">{{name}} - {{index}}</li>
</ul> -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private custom: CustomPipe){
    console.log(custom.transform("sddsksddksds", 3, 6));
  }
  names: string[] = ["Ahmet", "Yiğit", "Can", "Deniz", "Hilmi", "Hüseyin"]
  
  // pipe
  name = 'ahmet';
  
  // title = 'proj2';
  // name: string;

  // Interpolation Syntax 
  // title: string = "proj3";
  // person : {name : string, surname: string};

  // Directive Syntax
  // names: string[] = ["Yiğit", "Can", "Ayaz", "Muhammed", "Rıfkı", "Hilmi"]

  // ngIf
  // visible: boolean = false;

  /*
  1-Directive Oluşturma
  ng generate directive ... ya da 'ng g d ...'
  bir directive oluşturulduğu zaman ana modüle declare edilmelidir.
  2-selector'ı attribute olarak kullanma [appExample]
  3-selector'ı class olarak kullanma .appExample
  4-directive'e parametre tanımlama (input field)
  5-hostlistener
  6-hostbinding
  */



  // onChange($event) {
  //   console.log("input değişti!!!");
  // }
}
