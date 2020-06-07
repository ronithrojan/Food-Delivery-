import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { getLocaleDateFormat } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class FooddeliveryService {
  APP_KEY: string = "3a7b094e0a14d79607405c98cfeaaec5	";
  APP_ID: string = "16d80f85";
  favorites: any[] = [];
  selectedFood: any;
  constructor(private http: HttpClient) {}
}

// methods
