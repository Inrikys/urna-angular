import { Component } from '@angular/core';
import { ElectionService } from '../../services/election-service.service';


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent {

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
