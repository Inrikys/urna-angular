import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Election } from '../../interfaces/election-interface';
import { ElectionService } from 'src/app/services/election-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.scss']
})
export class UrnaComponent implements OnInit {

  urnaForm: FormGroup;
  election: Election | any;
  loadingCandidate = 0;
  electionNumber = '';


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

    this.urnaForm.valueChanges.subscribe(data => {
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

  setBlankElection(){
      this.urnaForm.setValue({number: '0000'});
  }

  setCorrige(){
    this.electionNumber = '';
    this.urnaForm.setValue({number: ''});
  }

  setValue(value){
    this.electionNumber = `${this.electionNumber}${value}`;
    if(this.electionNumber.length <= 4){
      this.urnaForm.setValue({number:this.electionNumber});
    }
  }

  async confirm(){
    if(this.election){
      swal.fire({
        title: 'Votação',
        text: `Deseja mesmo votar no ${this.election.name}`,
        icon: 'question',
        iconHtml:`<img width=200px height=125px src="${this.election.image}">`,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        showCancelButton: true,
        showCloseButton: true
      }).then(async (result) => {
        if (result.value) {
          const response = await this.electionService.vote(this.election._id);
          if(response){
            swal.fire(
              'Votação',
              'Voto realizado com sucesso!.',
              'success'
            )
          } else {
            swal.fire(
              'Erro',
              'Erro ao realizar votação!',
              'error'
            )
          }
        }
      }).catch((error) => {
        swal.fire(
          'Erro',
          error.message,
          'error'
        )
      })
    }
  }

}
