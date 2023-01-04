import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardzService } from 'src/app/shared/data-access/cardz.service';
import { Cardz } from 'src/app/shared/types/cardz';

@Component({
  selector: 'app-cardz-all',
  templateUrl: './cardz-all.component.html',
  styleUrls: ['./cardz-all.component.scss']
})
export default class CardzAllComponent implements OnInit{

  userCardzList$? : Observable <Cardz[]>;
  constructor(private cardzService : CardzService){

  }
  ngOnInit(): void {
  this.userCardzList$ = this.cardzService.getAllCardz();
  }
}
