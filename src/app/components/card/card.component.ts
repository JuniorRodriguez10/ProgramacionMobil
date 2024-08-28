import { Component, OnInit, Input, input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  @Input() store :any
  @Output() doClick = new EventEmitter();
  constructor() { }
  click(id: number){
    this.doClick.emit(id);
  }
  ngOnInit( ) {
   



  }

}
