import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Container } from '../../models/container';
import { ContainerApiStoreService } from '../../services/container-api/container-api-store.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  containerList: any;
  container: any;
  constructor(
    private containerService: ContainerApiStoreService,
    private route: Router
  ) { }
  dataSource = [];
  async ngOnInit(): Promise<void> {
    this.containerList = []
    this.containerList = await this.containerService.listContainer()
  }

  displayedColumns = ['ShortId', 'Name', 'Image', 'State', 'CreatedAt','delete'];

  newContainer() {
    this.route.navigateByUrl('/create-container');
  }
  editContainer(id: number) {
    this.route.navigate(['/edit-container'], { queryParams: { id: id } });

  }
  deleteContainer(id:number){
    this.containerService.deleteContainerById(id);
    this.ngOnInit()
  }
  ngOnDestroy(){
    this.containerList = []
    console.log('destuiru')
  }
}
