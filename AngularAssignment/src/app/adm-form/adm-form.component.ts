import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators ,FormControl } from '@angular/forms';
import { FetchDataService } from '../fetch-data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adm-form',
  templateUrl: './adm-form.component.html',
  styleUrls: ['./adm-form.component.css']
})

export class AdmFormComponent implements OnInit {

  constructor(private _fch : FetchDataService , 
              private _activatedRoute : ActivatedRoute,
              private _router : Router   
    ) { 
  }
    profileForm = new FormGroup({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
    }); 

  public fnme = this.profileForm.value.FirstName;
  public lnme = this.profileForm.value.LastName;
  public city = this.profileForm.value.City;

  set finame(fnme : string ) {
    this._fch.Fe =fnme;
  }

  set laname(lnme: string) {
    this._fch.Le = lnme;
  }

  set cty(city: string) {
    this._fch.Cy = city;
  }

  onSubmit() {

    if(this.profileForm.valid)
    {
    console.log(this.profileForm.value);
    console.log(this._fch.Fe);
    console.log(this._fch.Le);
    console.log(this._fch.Cy);
    this._router.navigate(['/page2']);
    }
    else
      console.log("Invalid Inputs");


  }
  ngOnInit(): void {
  }
}