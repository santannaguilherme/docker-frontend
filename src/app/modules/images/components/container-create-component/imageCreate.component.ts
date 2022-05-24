import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../../models/image';
import { ImageApiStoreService } from '../../services/image-api/image-api-store.service';

@Component({
  selector: 'app-imageCreate',
  templateUrl: './imageCreate.component.html',
  styleUrls: ['./imageCreate.component.css'],
})
export class ImageCreateComponent implements OnInit {
  imageList: any;
  pageForm: FormGroup;
  constructor(
    private imageService: ImageApiStoreService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.pageForm = this.fb.group({
      tag: [''],
      name: [''],
    });
  }
  dataSource = [];
  ngOnInit(): void {}
  postImage() {
    console.log(this.pageForm.value);
    const image = this.pageForm.value as Image;
    this.imageService
      .saveImage(image)
      .subscribe((data) => this.route.navigateByUrl('/'));
    this.route.navigateByUrl('/');
  }
}
