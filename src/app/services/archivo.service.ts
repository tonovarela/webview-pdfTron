import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { imageFile } from 'src/base64files/file';
import { Archivo } from '../interfaces/archivo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {
  archivoActual: Archivo = null;
  listFiles: Archivo[] = [];
  constructor(private router: Router, private zone: NgZone) { }



  guardarArchivo(base64String: string) {
    const date = new Date();
    this.listFiles.push({ base64: base64String, nombre: `File_created_${date.getFullYear()}-${date.getMonth() + 1}-${date.getUTCDate()}-${date.getHours()}:${date.getMinutes()}:${date.getMilliseconds()}.pdf` });
    localStorage.setItem("filesDemo1", JSON.stringify(this.listFiles))
    this.archivoActual=null;
    this.zone.run(() => {
      this.router.navigateByUrl('listado');
    });

  }




  cargarStorage(): void {
    if (localStorage.getItem("filesDemo1") != null) {
      this.listFiles = JSON.parse(localStorage.getItem("filesDemo1"));
    } else {
      this.listFiles.push({ base64: imageFile, nombre: "Dummy1.pdf" });
      localStorage.setItem("filesDemo1", JSON.stringify(this.listFiles))
    }

  }



}
