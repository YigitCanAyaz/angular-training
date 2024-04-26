import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { persons } from 'src/app/persons';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="row">
    @for(person of personDatas; track $index)
      {
        <div class="col-md-3">
          <a routerLink="/person-detail/{{person.id}}"><br>
            <img [src]="person.photo" [style]="person.viewTransitionName">
          </a>
        </div>
      }
  </div>
  `
})
export class PersonsComponent {
  personDatas: any[] = persons;
}
