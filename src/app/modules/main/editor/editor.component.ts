import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { ArchivoService } from 'src/app/services/archivo.service';
import { imageFile } from 'src/base64files/file';
import { initialParameters } from 'src/config/webViewerParameters';
import { base64ToBlob, blobToBase64 } from 'src/helpers/helper';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit {

  @ViewChild('viewer') viewer: ElementRef;
  wvInstance: WebViewerInstance;
  showButton: boolean = false;
  @Output() coreControlsEvent: EventEmitter<string> = new EventEmitter();

  constructor(private archivoService: ArchivoService, private router: Router) {

  }
  async ngAfterViewInit() {
    await this.loadWebview();
  }


  async loadWebview() {
    console.log(initialParameters);
    const web: WebViewerInstance = await WebViewer(initialParameters, this.viewer.nativeElement)
    this.wvInstance = web;
    const imageFile = this.archivoService.archivoActual.base64;
    web.UI.loadDocument(base64ToBlob(imageFile), { filename: 'myfile.pdf' });
    const { documentViewer, annotationManager } = web.Core;
    annotationManager.addEventListener('annotationChanged', (annotations, action) => {
      //console.log(action);
    });
    const { UI } = web;
    UI.setLanguage('es');
    UI.disableElements(['ribbons']);
    UI.disableElements(['leftPanel', 'leftPanelButton']);    
    UI.setHeaderItems((h: any) => {
      const elements: any[] = h.headers.default;      
      const elementsNotAllowed=["searchButton","menuButton"];
      h.headers.default = elements.filter(e =>!elementsNotAllowed.includes(e.dataElement));
      h.push({
        type: 'actionButton',
        title: 'Save in CRM',
        img: "https://cdn-icons-png.flaticon.com/512/4856/4856668.png",
        onClick :()=>{
          this.savePDF();
        }        
      });
    });

    this.showButton=true;


  }


  async savePDF(){
    const { documentViewer, annotationManager } =  this.wvInstance.Core;
    const doc = documentViewer.getDocument();
    const xfdfString = await annotationManager.exportAnnotations();
    const data = await doc.getFileData({
      includeAnnotations: true,
      // saves the document with annotations in it
      xfdfString
    });
    const arr = new Uint8Array(data);
    const blob = new Blob([arr], { type: 'application/pdf' });
    const base64 = await blobToBase64(blob)
    const baseString = base64.split(';')[1];
    const stringToSave = baseString.split(',')[1];
    this.archivoService.guardarArchivo(stringToSave);
  }

  ngOnInit() {
    if (this.archivoService.archivoActual == null) {
      this.router.navigateByUrl('listado');
    }
  }

}
