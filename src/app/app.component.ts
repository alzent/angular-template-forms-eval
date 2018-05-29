import { Component, ViewChild } from '@angular/core';
import { NgForm, FormControl, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form #myFormRef="ngForm" novalidate>
    <p>First Name <input name="fname" ngModel #fname="ngModel" required /></p>
    <p>Last Name <input name="lname" ngModel required /></p>
    Valid: {{ myFormInstance.valid }}
    Data: {{ myFormInstance.value | json }}
  </form>  `,
  styles: []
})

export class AppComponent {
    
  @ViewChild('myFormRef') myFormInstance: NgForm;

  @ViewChild('fname') fname2: FormControl;

}
