import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Election } from '../../interfaces/election-interface';
import { ElectionService } from 'src/app/services/election-service.service';

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.scss']
})
export class UrnaComponent implements OnInit {

  urnaForm: FormGroup;
  election: Election | any;
  loadingCandidate = 0;


  constructor(private fb: FormBuilder,
              private electionService: ElectionService) { }

  ngOnInit() {
    this.urnaForm = this.fb.group({
      number: ['',[
        Validators.required,
        Validators.pattern("/^[0-9]*$/"),
        Validators.minLength(4),
        Validators.maxLength(4),
      ]]
    })

    // get number() {
    //   return this.urnaForm.get('number');
    // }

    this.urnaForm.valueChanges.subscribe(data => {
      console.log(data);
      if (data.number.length == 4) {
        this.getElectionByNumber(data.number);
      } else {
        this.election = null;
      }
    })
  }

  async getElectionByNumber(number) {
    this.loadingCandidate = 1;
    this.election = await this.electionService.getElectionByNumber(number);
    this.loadingCandidate = 0;
  }
}
