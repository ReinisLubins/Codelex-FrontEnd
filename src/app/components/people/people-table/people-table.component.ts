import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PeopleApiResponse, Person} from "../../../shared/models/people.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent{
  @Input()
  set peopleWithPagination(peopleApiResponse: PeopleApiResponse | null) {
    if(peopleApiResponse) {
      this.people = peopleApiResponse.results
      this.collectionSize = peopleApiResponse.count
    }
  }

  @Input()
  page = 1;


  @Output()
  pageChangeEvent = new EventEmitter<number>();

  people?: Person[];
  collectionSize = 0;
  columnTitles = [
    'Name',
    'Height',
    'Mass',
    'Hair color',
    'Skin color',
    'Eye color',
    'Birth year',
    'Gender',
    'Created'
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  onPageChange(): void {
    this.setQueryParams();
    //this.pageChangeEvent.emit(this.page);
  }

  setQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.page
      }
    })
  }
}
