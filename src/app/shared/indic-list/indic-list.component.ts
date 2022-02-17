import { Component, OnInit } from '@angular/core';
import { IndicApiService } from 'src/app/service/indic-api.service';
import { Indication } from '../model/indication';


@Component({
  selector: 'indic-list',
  templateUrl: './indic-list.component.html',
  styleUrls: ['./indic-list.component.scss']
})
export class IndicListComponent implements OnInit {
    // columns we will show on the table
  public displayedColumns = ['nome', 'corretor', 'status', 'icones'];
  public dataSource: Indication[] = [];
  public details: any;

  constructor(
    private indicApiService: IndicApiService
  ) { }

  ngOnInit(): void {
    this.getIndicInformation();
  }

  getIndicInformation(){
    this.indicApiService.apiListAllIndications()
    .subscribe((res) => {
      this.dataSource = res;
    })
  }
  removeIndic(id: number){
    this.indicApiService.apiDeleteIndication(id)
    .subscribe(
      success => this.getIndicInformation(),
      error => console.error(error)
    );
    }
  }
