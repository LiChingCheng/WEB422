import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from '../data/position'
import { PositionService } from '../data/position.service';


@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  getPositionsSub;
  loadingError = false;


  constructor(private positionService:PositionService, private router:Router) { }

  ngOnInit() {
    this.getPositionsSub = this.positionService.getPositions()
    .subscribe(data => {
      this.positions = data;
    },
      function(err) { this.loadingError = true; }
    );
  }

  routePosition(id: string) {
    this.router.navigate(['/position', id]);
  }

  ngOnDestroy() {
    if(this.getPositionsSub != 'undefined'){
      this.getPositionsSub.unsubscribe();
    }
  }
}
