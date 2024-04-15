import { AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { capitalLetterValidator } from './validators/func';
import { ProductService } from './productservice';
import { productServiceIT } from './injection-token';
import { RandomService } from './random.service';
import { ChildComponent } from './components/ngtemplateoutlet/child/child.component';
import { Child1Component } from './components/child1/child1.component';
import { ExampleDirective } from './directives/example.directive';

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
<!-- <form [formGroup]="frm" (ngSubmit)="onSubmit()">
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
<br> -->

<!-- State Change -->

<!-- <button (click)="markAsTouched()">markAsTouched</button><br>

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


AppComponent => {{randomService.random}} -->
<!-- <br> -->
<!-- <app-a><app-a> -->

<!-- Services --> 
<!-- <br>
<br>
<br>
<app-create-user></app-create-user>
<br>
<app-read-user></app-read-user> -->


<!-- Routing -->
<!-- <a routerLink="home" routerLinkActive="active">Home</a> 
| <a routerLink="about" routerLinkActive="active">About</a> 
| <a routerLink="dashboard" routerLinkActive="active">Dashboard</a> 
| <a [routerLink]="['contact', 'a', 'b', 'c']" routerLinkActive="active">Contact</a>
<hr> -->
<!-- <router-outlet></router-outlet> -->
  <!-- <button (click)="go()">Go</button> -->

<!-- Routing - IV - Child Routes -->
  <!-- <a routerLink="products" [state]="{key3: 'value3', key4: 'value4'}">Products</a><br>
  <router-outlet></router-outlet> -->


<!-- Routing - V - Query String -->

  <!-- <a routerLink="a" [queryParams]="{x : 3}">a</a> & <a routerLink="b" 
  [queryParams]="bQueryString" queryParamsHandling="merge">b</a><br>
  <router-outlet></router-outlet> -->

  <!-- Module  -->

  <!-- <app-custom></app-custom> -->

  <!-- <a routerLink="">Home</a> | <a routerLink="products">Products</a>
  | <a routerLink="customers">Customers</a> <br>
  <br>

  <a routerLink="standalone">Standalone</a> | 
  <a routerLink="standalone2">Standalone 2</a>
  <br>

  <router-outlet></router-outlet> -->

  <!-- Standalone Component & Directive & Pipe -->

  <!-- <app-standalone></app-standalone>
  <app-standalone2></app-standalone2> -->


  <!-- <h3>App Component</h3> -->
  <!-- <app-home> -->
    <!-- Burası ng content içeriğidir -->
    <!-- <header>Burası header içeriğidir...</header>
    <body>
      burası body içeriğidir...
    </body>
    <footer>
      Burası footer içeriğidir...
    </footer>
  </app-home> -->
  
  <!-- <app-home>
    <div class="solMenu">Sol menü içeriği</div>
    <div class="ortaMenu">Orta menü içeriği</div>
    <div class="sagMenu">Sağ menü içeriği</div>

    asdasdasd
  </app-home> -->

  <!-- <ng-container>
    Burası container içeriğidir...
  </ng-container> -->

  <!-- <ul>
    <ng-container *ngFor="let product of products" >
    <li *ngIf="product.available">{{product.productName}}</li>
    </ng-container>
  </ul> -->

  <!-- <ng-container *ngTemplateOutlet="t">
    Ng Container içeriği...
  </ng-container>

  <ng-template #t>
    Ng Template içeriği...
  </ng-template> -->


  <!-- <ng-container *ngTemplateOutlet="t; context: {data: 123}"> -->
  <!-- <ng-container [ngTemplateOutlet]="t" [ngTemplateOutletContext]="{x: 123,
  y: 321, $implicit: 213}">
    container...
  </ng-container>
  <ng-template #t let-x="x" let-y="y" let-z>
    template... 
    <br>
    x: {{x}} y: {{y}} z: {{z}}
  </ng-template> -->

  <!-- <ng-container *ngTemplateOutlet="t; context: {$implicit: person}">

  </ng-container>

  <ng-template #t let-person>
    <ul>
      <li *ngFor="let _person of person">
      {{_person.personName}}
    </ul>
  </ng-template> -->

  <!-- <ng-template #t>
    Parent Ng Template içeriği...
  </ng-template> -->
  <!-- <app-childdd [childContainer]="t"></app-childdd> -->

  <!-- <h1 #h appExample>App Component</h1>

  <app-child1></app-child1> -->

  <!-- <p #p>A</p>
  <p #p *ngIf="visible">B</p>
  <p #p *ngIf="!visible">C</p>

  <button (click)="showHide()">Show/Hide</button> -->

  <h1 #h>App Component</h1>
  `,
  // styleUrls: ['./app.component.scss']
  styles: [".active{color:green;}"]
})
export class AppComponent implements OnInit, AfterViewInit{

  // @ViewChildren("p") list: QueryList<ElementRef>;
  @ViewChild("h", {static: true}) h: ElementRef;

  visible: boolean = true;

  showHide() {
    this.visible = !this.visible;
  }

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
  constructor(@Inject("productService")private productService: ProductService, private formBuilder: FormBuilder, public randomService: RandomService, private viewContainerRef: ViewContainerRef,
  private renderer: Renderer2) {
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


  // @ViewChild("h") _h1: ElementRef;
  // @ViewChild("h", {read: ElementRef}) _h2: ElementRef;
  // @ViewChild("h", {read: ExampleDirective}) _h3: ElementRef;
  // @ViewChild(Child1Component, {static: false}) _child1Component: Child1Component;
  // @ViewChild(Child1Component, {static: true, read: "ex"}) _ex: Child1Component;

  // @ViewChildren("h") _list : QueryList<ElementRef | Child1Component>;

  ngOnInit(): void {
    // console.log(this._child1Component + ' ngOnInit');
    // console.log(this._ex);
    // console.log(this._list);

    this.renderer.setStyle(this.h.nativeElement, "color", "red");
    
  }

  ngAfterViewInit() {
    // this.viewContainerRef.createEmbeddedView(this.ngTemplate);

    // console.log(this._h1);
    // console.log(this._h2);
    // console.log(this._h3);
    // console.log(this._child1Component);
    // this._child1Component.x()

    // console.log(this._list);

    // this.list.changes.subscribe({
    //   next: data => console.log(data)
    // })
  }

  go() {
    history.pushState({message: "merhaba"}, "title", "a/b");
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

  bQueryString : any = {
    title: "merhaba"
  }

  products: any[] = [
    {productName: "Pencil", available: true},
    {productName: "Notebook", available: true},
    {productName: "Duster", available: false},
    {productName: "Book", available: true},
    {productName: "Table", available: false},
    {productName: "Bin", available: true},
  ]

  @ViewChild("t", {static: false, read: TemplateRef}) 
  ngTemplate : TemplateRef<any>; 



  person : any[] = [
    {personName: 'Yiğit', age: 31},
    {personName: 'Şuayip', age: 32},
    {personName: 'Rıfkı', age: 33},
    {personName: 'Hüseyin', age: 34},
    {personName: 'Hilmi', age: 35}
  ]

}
