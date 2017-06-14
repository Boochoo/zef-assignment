import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlanService } from '../shared/plan.service';

import  { Plan } from '../shared/models/plan';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss', '../styles/main.scss']
})
export class MonthlyComponent implements OnInit {

  public regularSize = "250px";
  public selectedPlan : string = 'Free';
  private plans: any[];

  constructor(private  planService:PlanService) {
  }

  ngOnInit() {
    this.plans = this.planService.getmonthlyPlans();
  }

}
