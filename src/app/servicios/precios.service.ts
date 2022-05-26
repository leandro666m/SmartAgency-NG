import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PreciosService {

  starter: number = 0;
  enterprise: number = 0;

  constructor() {
    this.starter = 89;
    this.enterprise = 139;
  }


}
