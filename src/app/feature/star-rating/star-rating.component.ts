import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModule, NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  imports:[NgbModule,NgbRatingModule,CommonModule],
  providers:[NgbRatingConfig]
})
export class StarRatingComponent implements OnInit {

  @Input() rating: any;
  @Input() isReadOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
