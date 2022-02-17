import { IndicApiService } from '../../service/indic-api.service';
import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
import { faPen, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  arrowIcon = faArrowLeft;
  penIcon = faPen;
  public details: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;
  constructor(
    private api: IndicApiService,
    private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getDetails;
  }

  get getDetails(){
    const id = this.activatedRouter.snapshot.params['id'];
    const details = this.api.apiGetDetails(`${environment.baseUrl}Indicacoes/${id}`).subscribe(
      res => {
        this.details = res;
        console.log(this.details);
        this.isLoading = true;
      },
      error => {
        console.error(error);
        this.apiError = true;
      }
    )
    return details;
  }

}
