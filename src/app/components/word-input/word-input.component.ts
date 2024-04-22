import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {
  userInput: string = "";
  oddsArray: string[] = [];
  evensArray: string[] = [];
  oddsLength: number = 0;
  evensLength: number = 0;
  oddEvent: string = "";
  evenEvent: string = "";
  
  
  addOdds(){
    this.oddsArray[this.oddsLength++] = this.userInput
  }

  addEvens(){
    this.evensArray[this.evensLength++] = this.userInput
  }
  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userInput = value;
    
    if((this.userInput.length)%2 ===0){
      this.oddEvent = "";
      this.evenEvent = this.userInput;
    }
    if((this.userInput.length)%2 !==0){
      this.oddEvent = this.userInput;
      this.evenEvent = "";
    }
  }
  addToList(){
    
    if((this.userInput.length)%2 ===0){
      this.evensArray.push(this.userInput);
      console.log(this.evensArray);
      this.userInput = '';
    }
    if((this.userInput.length)%2 !==0){
      this.oddsArray.push(this.userInput);
      console.log(this.oddsArray);
      this.userInput = '';
    }
    

}}
