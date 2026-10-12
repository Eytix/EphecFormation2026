import { computed, Injectable, signal } from '@angular/core';
import { Formation } from './model/Formation'; // Vérifiez que votre fichier Formation.ts est bien dans un dossier 'model'

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  formations = signal<Formation[]>([
    {
      id: "184ecf8e-43c9-4f74-9281-7c67b6d69b32",
      title: 'Formation Angular',
      description: "Cette formation vous permettra de découvrir le framework Angular et de créer des applications web modernes et performantes.",
      location: 'Bruxelles',
      date: new Date(2026, 10, 12),
      tags: ['Angular', 'TypeScript', 'RxJS', 'RESTful API']
    },
    {
      id: "232ea0dc-a5ee-4708-9203-bd91e7937320",
      title: 'Formation React',
      description: "Cette formation vous permettra de découvrir le framework React et de créer des applications web modernes et performantes.",
      location: 'Louvain-la-Neuve',
      date: new Date(2026, 11, 3),
      tags: ['React', 'JavaScript', 'Redux', 'RESTful API']
    },
    {
      id: "f3e1c8b4-5d6a-4f9e-8c2b-1e2f3d4e5f6a",
      title: 'Formation Vue.js',
      description: "Cette formation vous permettra de découvrir le framework Vue.js et de créer des applications web modernes et performantes.",
      location: 'Liège',
      date: new Date(2027, 0, 20),
      tags: ['Vue.js', 'JavaScript', 'Vuex', 'RESTful API']
    }
  ]);

  private formationCount = computed(() => this.formations().length);

  getFormations() {
    return this.formations.asReadonly();
  }

  countFormations() {
    return this.formationCount;
  }

  getFormation(id: string): Formation | undefined {
    return this.formations().find(formation => formation.id === id);
  }

  create(formation: Formation) {
    this.formations.update(formations => [...formations, formation]);
  }
}
