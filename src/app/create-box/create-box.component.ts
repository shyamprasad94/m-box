import { Component, OnInit ,EventEmitter,Output,ViewChild} from '@angular/core';
 import {Box} from '../r-box/box.module';

@Component({
  selector: 'app-create-box',
  templateUrl: './create-box.component.html',
  styleUrls: ['./create-box.component.css']
})
export class CreateBoxComponent implements OnInit {
@Output() boxCreated = new EventEmitter<Box>();
  constructor() { }

  ngOnInit(): void {
  }

  oncreatBox(){
    this.boxCreated.emit();
  }

}
