import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'

import { PlanService } from '../shared/plan.service'


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['../styles/main.scss', './order.component.scss'],
  providers: []

})

export class OrderComponent implements OnInit {

  plan:any;

  public cardNumberLength:number = 16;

  public selectedValue:string;
  public selectedMonth:string;
  public selectedYear:string;

  rForm:FormGroup;
  post:any;
  name:string = '';
  city:string = '';
  zip:string = '';

  cardForm:FormGroup;
  cardPost:any;
  cardName:string = '';
  cardNumber:string = '';
  cardCountries:string = '';
  cardCity:string = '';
  cardZip:string = '';

  isValid:boolean;
  checkoutMode:boolean = true;
  checkoutFinalMode:boolean = false;
  checkoutModeFinal:boolean = false;
  stepOne:boolean = false;
  stepTwo:boolean = false;

  isClicked;

  countries = [
    {value: 'finland', viewValue: 'Finland'},
    {value: 'sweden', viewValue: 'Sweden'},
    {value: 'switzerland', viewValue: 'Switzerland'},
    {value: 'denmark', viewValue: 'Denmark'},
    {value: 'iceland', viewValue: 'Iceland'}
  ];

  expiry = [
    {month: '01', year: '2017'},
    {month: '02', year: '2018'},
    {month: '03', year: '2019'},
    {month: '04', year: '2020'},
    {month: '05', year: '2021'},
    {month: '06', year: '2022'},
    {month: '07', year: '2023'},
    {month: '08', year: '2024'},
    {month: '09', year: '2025'},
    {month: '10', year: '2026'},
    {month: '11', year: '2027'},
    {month: '12', year: '2028'}
  ];


  constructor(private planService:PlanService, private route:ActivatedRoute,
              private fb:FormBuilder) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'countries': [null, Validators.required],
      'city': [null, Validators.required],
      'zip': [null],
      'validate': ''
    });

    this.cardForm = fb.group({
      'cardName': [null, Validators.required],
      'cardCountries': [null, Validators.required],
      'cardNumber': [null, Validators.compose([Validators.required, Validators.maxLength(16)])],
      'cardZip': [null, Validators.required],
      'validate': ''
    });
  }

  ngOnInit() {
    this.plan = this.planService.getPlan(this.route.snapshot.params['id'], this.route.snapshot.params['param']);
  }

  addPost(post) {
    this.name = post.name;
    this.countries = post.countries;
    this.city = post.city;
    this.zip = post.zip;
  }

  addCardPost(cardPost) {
    this.cardName = cardPost.name;
    this.cardCountries = cardPost.countries;
    this.cardNumber = cardPost.cardNumber;
    this.cardZip = cardPost.cardZip;
  }

  placeOrder() {
    this.checkoutMode = false;
    this.stepOne = true;
    this.checkoutFinalMode = true;
  }

  placeFinalOrder() {
    this.checkoutMode = false;
    this.checkoutFinalMode = false;
    this.checkoutModeFinal = true;
    this.stepTwo = true;
  }

  isValidForm() {
    return this.isValid;
  }

}
