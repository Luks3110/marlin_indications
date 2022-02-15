import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { IndicApiService } from 'src/app/service/indic-api.service';
import { Indication } from '../model/indication';

@Component({
  selector: 'indic-list',
  templateUrl: './indic-list.component.html',
  styleUrls: ['./indic-list.component.scss']
})
export class IndicListComponent implements OnInit {
    // columns we will show on the table
  public displayedColumns = ['nome', 'corretor', 'status'];
  public dataSource: Indication[] = [];

  constructor(
    private indicApiService: IndicApiService
  ) { }

  ngOnInit(): void {
    this.getIndicInformation();
  }

  getIndicInformation(){
    this.indicApiService.apiListAllIndications()
    .subscribe((res) => {
      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
    })
  }

}
