import { Component, Inject, ViewChild } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { capitalLetterValidator } from './validators/func';
import { ProductService } from './productservice';
import { productServiceIT } from './injection-token';
import { RandomService } from './random.service';

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
<!-- {{name | slice: 1:3}}
<br/>
{{"Bu pipe denemesidir..." | custom: 3:7}} -->

<!-- <ul>
  <li *appCustomfor="names; let name; let index = index">{{name}} - {{index}}</li>
</ul> -->

<!-- <app-example data="merhaba">Test</app-example> -->

<!-- Template Driven Forms -->

<!-- <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
  <input type="text" name="name" placeholder="Name" ngModel> <br>
  <input type="text" name="surname" placeholder="Surname" ngModel> <br>
  <input type="email" name="email" placeholder="Email" ngModel> <br>
  <input type="tel" name="tel" placeholder="Tel"> <br>

  <div ngModelGroup="address">
    <input type="text" name="country" placeholder="Country" ngModel> <br>
    <input type="text" name="city" placeholder="City" ngModel> <br>
    <input type="text" name="address" placeholder="Address" ngModel>
  </div>
  <button>Send</button>
</form> -->

<!-- Model Driven Forms -->
<form [formGroup]="frm" (ngSubmit)="onSubmit()">
  <input type="text" placeholder="Name" formControlName="name"><br>
  <div *ngIf="!name.valid && (name.dirty || name.touched)">
    {{name.errors | json}}
  </div>
  <input type="text" placeholder="Surname" formControlName="surname"><br>
  <div *ngIf="!surname.valid && (surname.dirty || surname.touched)">
    {{surname.errors | json}}
  </div>
  <input type="email" placeholder="Email" formControlName="email"><br>
  <div *ngIf="!email.valid && (email.dirty || email.touched)">
    {{email.errors | json}}
  </div>
  <input type="tel" placeholder="Tel" formControlName="tel"><br>
  <div formGroupName="address">
    <input type="text" placeholder="Country" formControlName="country"><br>
    <input type="text" placeholder="City" formControlName="city"><br>
    <input type="text" placeholder="Address" formControlName="address"><br>
  </div>
  <button>Send</button>
</form>
<button (click)="ok()">Ok</button>
Valid : {{frm.valid}}
<br>

<!-- State Change -->

<button (click)="markAsTouched()">markAsTouched</button><br>

form touched : {{frm.touched}} <br>
'name' form control touched : {{frm.get("name").touched}} <br>
'address' form control touched : {{frm.get("address").touched}} <br>
'country' form control touched : {{frm.get("address").get("country").touched}}

<br>

<button (click)="markAllAsTouched()">markAllAsTouched</button><br>
<button (click)="markAsUntouched()">markAsUntouched</button><br>
  
  
  <br>

  'name' form control dirty :{{frm.get("name").dirty}}

  <br>

  <button (click)="markAsDirty()">markAsDirty</button><br>


  <br>

'name' form control pristine :{{frm.get("name").pristine}}

<br>

<button (click)="markAsPristine()">markAsPristine</button><br>

<button (click)="enable()">enable</button><br>


<button (click)="disable()">disable</button><br>


AppComponent => {{randomService.random}}
<br>
<!-- <app-a><app-a> -->

<!-- Services --> 
<br>
<br>
<br>
<app-create-user></app-create-user>
<br>
<app-read-user></app-read-user>


<!-- Routing -->
<a routerLink="home" routerLinkActive="active">Home</a> 
| <a routerLink="about" routerLinkActive="active">About</a> 
| <a [routerLink]="['contact', 'a', 'b', 'c']" routerLinkActive="active">Contact</a>
<hr>
<router-outlet></router-outlet>
  
  `
  
  ,
  // styleUrls: ['./app.component.scss']
  styles: [".active{color:green;}"]
})
export class AppComponent {
  // constructor(private custom: CustomPipe){
  //   console.log(custom.transform("sddsksddksds", 3, 6));
  // }
  // names: string[] = ["Ahmet", "Yiğit", "Can", "Deniz", "Hilmi", "Hüseyin"]

  // pipe
  // name = 'ahmet';

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

  // Component Life Cycle Hook

  // Template Driven Forms

  // @ViewChild("frm", {static:true}) frm:NgForm;

  // onSubmit(data){
  // console.log('Value ' + this.frm.value);
  // console.log('Valid ' + this.frm.valid);
  // console.log('Touched ' + this.frm.touched);
  // console.log('Submitted ' + this.frm.submitted);

  // console.log(data);

  //   console.log(this.frm);
  //   console.log(this.frm.controls);
  //   console.log(this.frm.form);
  // }

  // Model Driven

  frm: FormGroup;
//  @Inject("example") func: any
  constructor(@Inject("productService")private productService: ProductService, private formBuilder: FormBuilder, public randomService: RandomService) {
    // console.log(func());
    console.log(productService.getProducts());
    this.frm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), capitalLetterValidator(3)]],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      tel: [""],
      address: formBuilder.group({
        country: [""],
        city: [""],
        address: [""]
      })
    }, {validators : []});

    // formda herhangi bir şey değişirse çalışır.
    this.frm.valueChanges.subscribe({
      next: data => {
        console.log(data);
      }
    });

    // name değişirse çalışır.
    this.frm.get("name").valueChanges.subscribe({
      next: data => {
        console.log(data);
      }
    });
  }

  get name() {
    return this.frm.get("name");
  }

  get surname() {
    return this.frm.get("surname");
  }

  get email() {
    return this.frm.get("email");
  }

  onSubmit() {
    console.log(this.frm.valid);
    console.log(this.frm.value);
  }

  ok() {
    // this.frm.controls["name"] böyle de erişilebilir.
    this.frm.get("name").setValue("Gençay", { onlySelf: true });
  }

  // Change status

  markAsTouched() {
    // this.frm.markAsTouched();
    this.frm.get("name").markAsTouched({ onlySelf: true });
  }

  markAllAsTouched() {
    // this.frm.markAllAsTouched();
    this.frm.get("address").markAllAsTouched();
    // 
  }

  markAsUntouched() {
    this.frm.markAsUntouched();
  }

  markAsDirty() {
    this.frm.get("name").markAsDirty();
  }

  markAsPristine() {
    this.frm.get("name").markAsPristine();
  }

  disable() {
    this.frm.get("name").disable();
  }

  enable() {
    this.frm.get("name").enable();
  }
}
