import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Archivo } from 'src/app/interfaces/archivo.interface';
import { ArchivoService } from 'src/app/services/archivo.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listFiles: Archivo[] = [];
  constructor(private archivoService: ArchivoService,
    private router: Router) { }

  ngOnInit(): void {
    this.archivoService.cargarStorage();
    this.listFiles = this.archivoService.listFiles;
  }


  irArchivo(file) {
    this.archivoService.archivoActual = file;
    this.router.navigateByUrl('editor');
  }

}
