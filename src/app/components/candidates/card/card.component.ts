import { Component, OnInit, Input } from '@angular/core';
import { Election } from '../../../interfaces/election-interface'
import { ElectionService } from '../../../services/election-service.service';

@Component({
  selector: 'election-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ElectionCardComponent {

  constructor(
    private electionService: ElectionService,
  ) { 
    this.initialize();
  }

  public elections: any;

  async initialize() {
    await this.getElections();
    console.log(this.elections);
  }

  async getElections(){
    this.elections = await this.electionService.getElections();
  }

}
