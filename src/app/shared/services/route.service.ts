import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class RouteService {
  public activePage: string = "feed";
  constructor() {}
  public goToPage(label: string) {
    this.activePage = label;
  }
}
