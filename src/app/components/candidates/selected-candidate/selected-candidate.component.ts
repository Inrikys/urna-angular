import { Component, OnInit, Input } from '@angular/core';
import { Election } from 'src/app/interfaces/election-interface';
import { ElectionService } from '../../../services/election-service.service';

@Component({
  selector: 'selected-candidate',
  templateUrl: './selected-candidate.component.html',
  styleUrls: ['./selected-candidate.component.scss']
})
export class SelectedCandidateComponent implements OnInit {

  @Input() election: Election;

  @Input() loadingCandidate: Number;

  constructor() { }

  ngOnInit() {
    this.loadingCandidate = 0;
  }

}
