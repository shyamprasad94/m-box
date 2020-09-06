import {Observable} from 'rxjs/observable';
import { Observer } from 'rxjs/Observer';


import { Box} from '../r-box/box.module'


export class Boxservice{
    private Boxes : Box = [] =[
        
    ];

    loadBoxes(): Observable<Box[]>{
        const bxloader = Observable.create((observer : Observer<Box[]>)=>{
           
        });
        return bxloader;
    }
}