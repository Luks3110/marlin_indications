import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  arrowIcon = faArrowLeft;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  //create a form group called 'profileForm' that has the following fields:
  //nome, telefone, empresa, email e corretor
  //use the form builder to create the form
  profileForm = this.formBuilder.group({
    nome: [''],
    telefone: [''],
    empresa: [''],
    email: [''],
    corretor: ['']
  });

  ngOnInit(): void {

  }

}
