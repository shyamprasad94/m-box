import { Component, OnInit,EventEmitter,Output ,Input} from '@angular/core';
import { Box } from '../r-box/box.module';
@Component({
  selector: 'app-display-box',
  templateUrl: './display-box.component.html',
  styleUrls: ['./display-box.component.css']
})
export class DisplayBoxComponent implements OnInit {
@Output() boxDeleted = new EventEmitter<void>();
@Input() Boxes: Box;
  constructor() { }

  ngOnInit(): void {
   
  }
  delete(){
    this.boxDeleted.emit();
  }
}



