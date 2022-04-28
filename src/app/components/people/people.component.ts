import {Component, OnInit} from '@angular/core';
import {PeopleService} from "../../shared/services/people.service";
import {Person} from "../../shared/models/people.model";
import {ActivatedRoute} from "@angular/router";
import {delay, finalize, tap} from "rxjs";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit{
  peopleApiResponse$ = this.peopleService.getPeople().pipe(
    tap(() => this.loading = true),
    finalize(() => this.loading = false)
  );
  page = 1;
  loading = false;

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const page = params['page']

      if (page) {
        this.page = Number(page);
        this.refreshPeople(this.page)
      }
    });
  }

  refreshPeople(page: number): void {
    this.peopleApiResponse$ = this.peopleService.getPeople(page);
  }
}
