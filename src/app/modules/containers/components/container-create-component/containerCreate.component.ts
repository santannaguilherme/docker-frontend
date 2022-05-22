import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Container } from '../../models/container';
import { ContainerApiStoreService } from '../../services/container-api/container-api-store.service';

@Component({
  selector: 'app-containerCreate',
  templateUrl: './containerCreate.component.html',
  styleUrls: ['./containerCreate.component.css'],
})
export class ContainerCreateComponent implements OnInit {
  containerList: any;
  pageForm: FormGroup;
  constructor(
    private containerService: ContainerApiStoreService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.pageForm = this.fb.group({
      worker: [''],
      machine: [''],
      dateTime: [''],
    });
  }
  dataSource = [];
  ngOnInit(): void {}
  postContainer() {
    console.log(this.pageForm.value);
    const container = this.pageForm.value as Container;
    this.containerService
      .saveContainer(container)
      .subscribe((data) => this.route.navigateByUrl('/'));
    this.route.navigateByUrl('/');
  }
}
