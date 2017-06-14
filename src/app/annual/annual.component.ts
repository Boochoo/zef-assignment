import { Component, OnInit } from '@angular/core';

import { Plan } from '../shared/models/plan';
import { PlanService } from '../shared/plan.service';

@Component({
  selector: 'app-annual',
  templateUrl: './annual.component.html',
  styleUrls: ['../styles/main.scss', './annual.component.scss']
})
export class AnnualComponent implements OnInit {
  public selectedPlan : string = 'Free';
  public plans;
  public regularSize = "250px";

  constructor(private planService : PlanService) {
  }

  ngOnInit() {
    this.plans = this.planService.getAnnualPlans();
  }

}
