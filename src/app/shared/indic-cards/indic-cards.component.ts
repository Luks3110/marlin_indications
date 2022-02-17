import { Component, OnInit } from '@angular/core';
import { IndicApiService } from 'src/app/service/indic-api.service';
import { Indication } from '../model/indication';

@Component({
  selector: 'indic-cards',
  templateUrl: './indic-cards.component.html',
  styleUrls: ['./indic-cards.component.scss']
})
export class IndicCardsComponent implements OnInit {
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
      console.log(this.dataSource)
    })
  }
  countWithCorretor() {
    return this.dataSource.filter(o => o.corretor !== "").length;
  }
  countWithoutCorretor() {
    return this.dataSource.filter(o => o.corretor === "").length;
  }

}
