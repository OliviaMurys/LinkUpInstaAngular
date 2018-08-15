import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor() { }
  feedVisible: boolean = true;
  profileVisible: boolean = false;
  addVisible: boolean = false
}
