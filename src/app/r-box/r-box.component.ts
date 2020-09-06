import { Component, OnInit, HostListener } from '@angular/core';
import {Box} from './box.module';
import { Boxservice} from './box.service'


@Component({
  selector: 'app-r-box',
  templateUrl: './r-box.component.html',
  styleUrls: ['./r-box.component.css']
})
export class RBoxComponent implements OnInit {
Boxes : Box[] = [];
markedbxIndex=null;


  constructor(private bxservice : Boxservice) { }

  ngOnInit(): void {
    this.bxservice.loadBoxes()
    .subscribe(
      (bx:Box[]) =>{
        this.Boxes =bx;
      }
    );
    
  }
  
  onBoxCreated(box : Box){
    this.Boxes.push(box);
  }
 
    

  @HostListener('document:keydown', ['$event','markedbxIndex'])
  boxDeleted(event: KeyboardEvent,markedbxIndex : number) {
    if (event.keyCode === 46) {
      console.log(markedbxIndex)
       this.Boxes.splice(markedbxIndex,1);
    }
    
    else if (event.keyCode === 38 && (markedbxIndex<=this.Boxes.length)) {
        markedbxIndex = markedbxIndex -1;
        console.log(markedbxIndex)

      }
    else if (event.keyCode === 40 && (markedbxIndex<=this.Boxes.length)) {
        markedbxIndex = markedbxIndex +1;
        console.log(markedbxIndex)

      }
     
  };

 
  
  
    }
  


    

