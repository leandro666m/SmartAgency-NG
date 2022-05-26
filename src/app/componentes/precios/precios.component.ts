import { Component, OnInit } from '@angular/core';
import { PreciosService } from 'src/app/servicios/precios.service';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  precioStarter: number = 0;
  precioEnterprise: number = 0;

  constructor(private preciosServicio: PreciosService) {
    this.precioStarter = this.preciosServicio.starter;
    this.precioEnterprise = this.preciosServicio.enterprise;
  }

  ngOnInit(): void {

  }

}
