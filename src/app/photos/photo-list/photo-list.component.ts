import { Component, OnInit, OnDestroy } from '@angular/core';
//import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'


import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.debounce.unsubscribe(); // para não alocar dados em memoria na hora da pesquisa
    }

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  constructor(private activatedRoute: ActivatedRoute) { }
    //private photoService: PhotoService,
   

  ngOnInit(): void {

    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
    

    //const userName = this.activatedRoute
    //  .snapshot
    //  .params
    //  .userName;
    //this.photoService
    //  .listFromUser(userName)
    //  .subscribe(photos => this.photos = photos);

  }
}
