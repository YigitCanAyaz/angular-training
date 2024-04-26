import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { persons } from 'src/app/persons';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [RouterModule],
  template: `
    {{person.name}} <br>
    <img [src]="person.photo" [style]="person.viewTransitionName">
  `
})
export class PersonDetailComponent {
  @Input() id: number;
  person: any;

  ngOnInit() {
    console.log(this.id);
    this.person = persons.find(p => p.id == this.id);
  }
}
