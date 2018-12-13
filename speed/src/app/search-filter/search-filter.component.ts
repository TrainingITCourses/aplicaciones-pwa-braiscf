import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { Criterio } from '../store/models/criterio';


@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  @Output() public search = new EventEmitter<Criterio>();
  public statuses;
  public agencies;
  public types;
  public launches;
  public arrCriterioBusqueda: any[];
  public elementosCombo: any[];
  public criterionName: string;


  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.arrCriterioBusqueda = [
      {key: 1, text: 'Estado'},
      {key: 2, text: 'Agencia'},
      {key: 3, text: 'Tipo'}
  ];

   this.store
    .select('status')
    .subscribe(statusesState => (this.statuses = statusesState.statuses));

   this.store
      .select('agency')
      .subscribe(agenciesState => (this.agencies = agenciesState.agencies));

   this.store
      .select('launch')
      .subscribe(launchesState => (this.launches = launchesState.launches));

    this.store
      .select('type')
      .subscribe(typesState => (this.types = typesState.types));
  }


  onRadioButtonChange(entry) {

    switch (entry.key) {
      case 1:
        this.elementosCombo = this.statuses;
        this.criterionName = this.arrCriterioBusqueda[0].text;
        break;
      case 2:
        this.elementosCombo = this.agencies;
        this.criterionName = this.arrCriterioBusqueda[1].text;
        break;
      case 3:
        this.elementosCombo = this.types;
        this.criterionName = this.arrCriterioBusqueda[2].text;
        break;
      default:

    }
  }



}
