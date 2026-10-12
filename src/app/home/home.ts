import {Component, inject} from '@angular/core';
import {NgPlural, NgPluralCase} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {FormationService} from '../formation-service';

@Component({
  imports: [NgPlural, NgPluralCase, RouterLink, MatButtonModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  formationService = inject(FormationService);

  formationCount = this.formationService.countFormations();

}
