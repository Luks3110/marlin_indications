import { IndicApiService } from '../../service/indic-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { AddSucessComponent } from 'src/app/shared/add-sucess/add-sucess.component';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  arrowIcon = faArrowLeft;
  profileForm !: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder,
    private api: IndicApiService,
    private router: Router,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      empresa: [''],
      email: ['', Validators.required],
      corretor: ['']
    })
  }
  addIndication(){
    if(this.profileForm.valid){
      this.api.postIndication(this.profileForm.value)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/']);
          this.matDialog.open(AddSucessComponent,{
            height: '324px',
            width: '507px'
          });
        },
        error: (err) => {
          console.error(err);
          alert("Erro ao enviar a indicação!");
        }
      })
    }else{
      alert('Formulário inválido! Preencha os campos requeridos.');
    }
  }

}
