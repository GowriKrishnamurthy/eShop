import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 100 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating  ${this.rating} was clicked`);
  }
}
