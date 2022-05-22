import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HistoryApiStoreService } from '../../services/history-api/history-api-store.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  historyList: any;
  history: any;
  constructor(
    private historyService: HistoryApiStoreService,
    private route: Router
  ) { }
  dataSource = [];
  async ngOnInit(): Promise<void> {
    this.historyList = []
    this.historyList = await this.historyService.listHistory()
  }

  displayedColumns = ['ShortId', 'Name', 'Image', 'State', 'CreatedAt','delete'];

  newHistory() {
    this.route.navigateByUrl('/create-container');
  }
  deleteHistory(id:number){
    this.historyService.deleteHistoryById(id);
    this.ngOnInit()
  }
  ngOnDestroy(){
    this.historyList = []
    console.log('destuiru')
  }
}
