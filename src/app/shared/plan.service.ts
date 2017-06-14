import { Injectable } from '@angular/core'

import { Plan } from './models/plan'

@Injectable ()
export class PlanService {
  getmonthlyPlans() {
    return PLANS.monthly;
  }
  getAnnualPlans() {
    return PLANS.annually;
  }


  getPlan (id:number, param : string) {
    return PLANS[param][id - 1];
  }
}

const PLANS = {
  "monthly": [
    {
      "id": 1,
      "bgcolor": "#c8c9ca",
      "type": "Free",
      "price": "$0",
      "surveyAmt": "1 survey",
      "plan": "Current plan",
      "moreOption": null
    },
    {
      "id": 2,
      "type": "Basic",
      "bgcolor": null,
      "price": "$1",
      "surveyAmt": "10 surveys",
      "plan": "Choose plan",
      "moreOption": "Start free trial"
    },
    {
      "id": 3,
      "bgcolor": null,
      "type": "Pro",
      "price": "$10",
      "surveyAmt": "50 surveys",
      "plan": "Choose plan",
      "moreOption":  "Start free trial"
    },
    {
      "id": 4,
      "bgcolor": '#009fda',
      "type": "Enterprise",
      "price": "Custom",
      "surveyAmt": "Unlimited surveys",
      "plan": "Contact us",
      "moreOption": "Contact us"
    }
  ],
  "annually": [
    {
      "id": 1,
      "bgcolor": "#c8c9ca",
      "type": "Free",
      "price": "$0",
      "surveyAmt": "1 survey",
      "plan": "Current plan",
      "moreOption": null

    },
    {
      "id": 2,
      "bgcolor": null,
      "type": "Basic",
      "price": "$11",
      "surveyAmt": "10 surveys",
      "plan": "Choose plan",
      "moreOption":  "Start free trial"

    },
    {
      "id": 3,
      "bgcolor": null,
      "type": "Pro",
      "price": "$108",
      "surveyAmt": "50 surveys",
      "plan": "Choose plan",
      "moreOption":  "Start free trial"
    },
    {
      "id": 4,
      "bgcolor": '#009fda',
      "type": "Enterprise",
      "price": "Custom",
      "surveyAmt": "Unlimited surveys",
      "plan": "Contact us",
      "moreOption": "Contact us"
    }
  ]
};
