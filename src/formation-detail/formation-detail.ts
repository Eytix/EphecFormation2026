import {Component, computed, inject, input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormationService} from '../formation-service';

@Component({
  imports: [
    RouterLink,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    DatePipe
  ],
  selector: 'app-formation-detail',
  styleUrl: './formation-detail.css',
  templateUrl: './formation-detail.html',
})
export class FormationDetail {

  formationService = inject(FormationService);

  // Alimenté par le paramètre de route :id (withComponentInputBinding)
  id = input.required<string>();

  formation = computed(() => this.formationService.getFormation(this.id()));

}
