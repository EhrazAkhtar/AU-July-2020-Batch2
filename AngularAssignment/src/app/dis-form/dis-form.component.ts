import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-dis-form',
  template: `
        
  <h5>First Name : {{ display1 }}</h5>
  <h5>Last Name {{ display2 }}</h5>
  <h5>City :{{ display3 }}</h5>
  `,
  styleUrls: ['./dis-form.component.css']
})
export class DisFormComponent implements OnInit {

  constructor(private _fch: FetchDataService) { }

  
  ngOnInit(): void {
  }

  public display1 = this._fch.Fe;
  public display2 = this._fch.Le;
  public display3 = this._fch.Cy;

}
