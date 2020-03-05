import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  constructor(private activatedRoute: ActivatedRoute) { }
    //private photoService: PhotoService,
   

  ngOnInit(): void {

    this.photos = this.activatedRoute.snapshot.data['photos'];

    //const userName = this.activatedRoute
    //  .snapshot
    //  .params
    //  .userName;
    //this.photoService
    //  .listFromUser(userName)
    //  .subscribe(photos => this.photos = photos);

  }
}
