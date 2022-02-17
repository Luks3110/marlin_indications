import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-sucess',
  templateUrl: './add-sucess.component.html',
  styleUrls: ['./add-sucess.component.scss']
})
export class AddSucessComponent implements OnInit {
  checkIcon = faCheckCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
