import {Component, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {DatePipe} from '@angular/common';
import {Formation} from '../model/Formation';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    MatChip,
    MatChipSet,
    MatIcon,
    DatePipe,
    RouterLink
  ],
  selector: 'app-formation-card',
  styleUrl: './formation-card.css',
  templateUrl: './formation-card.html',
})
export class FormationCard {

  formationInput = input.required<Formation>();

  protected isAngular(tag: string) {
    return tag === 'Angular';
  }
}
