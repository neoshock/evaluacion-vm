import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Work } from '../models/work';
import { WorkDetail } from '../models/work-detail';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'app-workdetails',
  templateUrl: './workdetails.component.html',
  styleUrls: ['./workdetails.component.scss']
})
export class WorkdetailsComponent implements OnInit {

  public workName: string = "";
  public work: WorkDetail = {};

  constructor(private activateRoute: ActivatedRoute, private workService: WorkService) {

  }

  ngOnInit(): void {
    const name = this.activateRoute.snapshot.paramMap.get('name');
    this.workName = name!;
    this.getDetailOfWork(this.workName);
  }

  getDetailOfWork(workName: string) {
    this.workService.getWorkDetail(workName).then(
      result => this.work = result[0]
    ).catch(error => console.log(error));
  }

}
