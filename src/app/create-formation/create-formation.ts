import {Component, inject, signal} from '@angular/core';
import {form, FormField, FormRoot, maxLength, required, validate} from '@angular/forms/signals';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormationService} from '../formation-service';
import {Formation} from '../model/Formation';

interface FormationModel {
  title: string;
  description: string;
  location: string;
  date: Date | null;
  tags: string[];
}

const MAX_TAGS = 5;
const MAX_TAG_LENGTH = 20;

function emptyFormation(): FormationModel {
  return {title: '', description: '', location: '', date: null, tags: []};
}

@Component({
  imports: [
    FormField,
    FormRoot,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  selector: 'app-create-formation',
  styleUrl: './create-formation.css',
  templateUrl: './create-formation.html',
})
export class CreateFormation {

  readonly maxTags = MAX_TAGS;
  readonly maxTagLength = MAX_TAG_LENGTH;
  formationService = inject(FormationService);

  model = signal<FormationModel>(emptyFormation());

  form = form(this.model, path => {
    required(path.title);
    maxLength(path.title, 100);
    required(path.description);
    maxLength(path.description, 1000);
    required(path.location);
    required(path.date);
    maxLength(path.tags, MAX_TAGS);
    validate(path.tags, ({value}) =>
      value().some(tag => tag.length > MAX_TAG_LENGTH) ? {kind: 'tagTooLong'} : undefined
    );
  }, {
    submission: {
      action: async () => this.createFormation()
    }
  });

  addTag(event: MatChipInputEvent) {
    const tag = (event.value || '').trim();
    const tags = this.form.tags().value();
    if (tag && !tags.includes(tag)) {
      this.form.tags().value.set([...tags, tag]);
    }
    event.chipInput.clear();
  }

  removeTag(tag: string) {
    this.form.tags().value.update(tags => tags.filter(t => t !== tag));
  }

  private createFormation() {
    const {title, description, location, date, tags} = this.model();
    const newFormation: Formation = {
      id: crypto.randomUUID(),
      title,
      description,
      location,
      date: date!,
      tags
    }

    this.formationService.create(newFormation);
    this.form().reset(emptyFormation());
  }

}
