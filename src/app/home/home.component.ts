import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  template: `
  <!-- <h1>{{pageName}}</h1> -->

  <h3>Home Component</h3>
  <br>
  <!-- <div style="background-color: antiquewhite;">
  <ng-content select="header"></ng-content>
</div>

<div style="background-color: azure;">
<ng-content select="body"></ng-content>
</div>

<div style="background-color: red;">
<ng-content select="footer"></ng-content>
</div> -->

  <!-- <ng-content select="header"></ng-content>
  <ng-content select="body"></ng-content>
  <ng-content select="footer"></ng-content> -->

  <table>
    <tr>
      <td><ng-content select=".solMenu"></ng-content></td>
      <td><ng-content select=".ortaMenu"></ng-content></td>
      <td><ng-content select=".sagMenu"></ng-content></td>
    </tr>

    <tr>
      <ng-content></ng-content>
    </tr>
  </table>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() pageName: string;
}
