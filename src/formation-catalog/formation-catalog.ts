import {Component, computed, inject, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormationCard} from '../formation-card/formation-card';
import {FormationService} from '../formation-service';

@Component({
  imports: [FormField, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, FormationCard],
  selector: 'app-formation-catalog',
  styleUrl: './formation-catalog.css',
  templateUrl: './formation-catalog.html',
})
export class FormationCatalog {

  formationService = inject(FormationService);

  formations = this.formationService.getFormations();

  titleFilter = signal('');
  titleFilterField = form(this.titleFilter);

  filteredFormations = computed(() => {
    const filter = this.titleFilter().trim().toLowerCase();
    return this.formations().filter(formation => formation.title.toLowerCase().includes(filter));
  });

}
