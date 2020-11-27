import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})

export class StarComponent implements OnChanges {

  @Input()
  rating: number = 0;

  starWidth: number;

  ngOnChanges():void {
    this.starWidth = this.rating * 64 / 5;
  }
}
