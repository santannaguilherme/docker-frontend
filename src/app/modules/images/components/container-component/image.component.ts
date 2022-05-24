import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../../models/image';
import { ImageApiStoreService } from '../../services/image-api/image-api-store.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  imageList: any;
  image: any;
  constructor(
    private imageService: ImageApiStoreService,
    private route: Router
  ) { }
  dataSource = [];
  async ngOnInit(): Promise<void> {
    this.imageList = []
    this.imageList = await this.imageService.listImage()
  }

  displayedColumns = ['ShortId', 'Name', 'Tag', 'CreatedAt', 'delete'];

  newImage() {
    this.route.navigateByUrl('/pull-image');
  }
  deleteImage(id: number) {
    this.imageService.deleteImageById(id).then(() => { this.ngOnInit() });
  }
  ngOnDestroy() {
    this.imageList = []
    console.log('destuiru')
  }

  deleteAllImages() {
    this.imageService.deleteImages().then(() => { this.ngOnInit() });

  }
}
