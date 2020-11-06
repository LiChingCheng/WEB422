import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Position } from '../data/position';
import { PositionService } from '../data/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  paramSubscription: any;
  positionSubscription: any;
  savePositionSubscription: any;
  position: Position;
  successMessage = false;
  failMessage = false;

  constructor(private positionService:PositionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.activatedRoute.params.subscribe((params)=>{
      this.positionSubscription = this.positionService.getPosition(params['_id']).subscribe((position)=>{
        this.position = position[0];
      });
    });
  }

  onSubmit(){
    this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(()=>{
      this.successMessage = true;
      setTimeout(()=>{ this.successMessage = false; }, 2500);
    }, ()=>{
      this.failMessage = true;
      setTimeout(()=>{ this.failMessage = false; }, 2500);
    })
  }

  ngOnDestroy() {
    if (this.paramSubscription) { this.paramSubscription.unsubscribe(); }
    if (this.positionSubscription) { this.positionSubscription.unsubscribe(); }
    if (this.savePositionSubscription) { this.savePositionSubscription.unsubscribe(); }
  }
}
