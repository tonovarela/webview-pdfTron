import { Component, ViewChild, OnInit, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
// import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
// import { imageFile } from './../base64files/file';
// import { initialParameters } from './../config/webViewerParameters';
// import { base64ToBlob, blobToBase64 } from 'src/helpers/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChild('viewer') viewer: ElementRef;
  // wvInstance: WebViewerInstance;
  // @Output() coreControlsEvent: EventEmitter<string> = new EventEmitter();
  //private documentLoaded$: Subject<void>;
  constructor() {
    //    this.documentLoaded$ = new Subject<void>();
  }
  async ngAfterViewInit() {
    //await this.loadWebview();
    // WebViewer(initialParameters, this.viewer.nativeElement).then((web:WebViewerInstance) => {
    //   this.wvInstance = web;
    //   //this.coreControlsEvent.emit(instance.UI.LayoutMode.Single);
    //   web.UI.loadDocument(base64ToBlob(imageFile), { filename: 'myfile.pdf' });
    //   const { documentViewer, Annotations, annotationManager } = web.Core;
    //   annotationManager.addEventListener('annotationChanged', (annotations, action) => {
    //     //console.log(action);
    //   });
    //   web.UI.setLanguage('es');
    //   web.UI.disableElements(['ribbons']);
    //   web.UI.disableElements(['toolbarGroup-Shapes']);
    //   web.UI.disableElements(['toolbarGroup-Edit']);
    //   web.UI.disableElements(['toolbarGroup-Insert']);

    //   web.UI.setHeaderItems(header => {
    //     header.push({
    //       type: 'actionButton',
    //       title: 'Guardar en CRM',
    //       icon: 'edit',                    
    //       onClick: async () => {
    //         const doc = documentViewer.getDocument();
    //         const xfdfString = await annotationManager.exportAnnotations();
    //         const data = await doc.getFileData({
    //           includeAnnotations: true,
    //           // saves the document with annotations in it
    //           xfdfString
    //         });
    //         const arr = new Uint8Array(data);
    //         const blob = new Blob([arr], { type: 'application/pdf' });
    //         const base64 = await blobToBase64(blob)
    //         console.log(base64);



    //         // Add code for handling Blob here
    //       }
    //     });
    //   });

    //   documentViewer.addEventListener('annotationsLoaded', () => {
    //     console.log('annotations loaded');
    //   });

    //   documentViewer.addEventListener('documentLoaded', () => {
    //     this.documentLoaded$.next();
    //     const rectangleAnnot = new Annotations.RectangleAnnotation({
    //       PageNumber: 1,          
    //       X: 100,
    //       Y: 150,
    //       Width: 200,
    //       Height: 50,
    //       Author: annotationManager.getCurrentUser()
    //     });
    //     //annotationManager.addAnnotation(rectangleAnnot);
    //     //annotationManager.redrawAnnotation(rectangleAnnot);
    //   });
    // })
  }


  async loadWebview() {
    // const web: WebViewerInstance = await WebViewer(initialParameters, this.viewer.nativeElement)
    // this.wvInstance = web;
    // web.UI.loadDocument(base64ToBlob(imageFile), { filename: 'myfile.pdf' });
    // const { documentViewer, annotationManager } = web.Core;
    // annotationManager.addEventListener('annotationChanged', (annotations, action) => {
    //   //console.log(action);
    // });
    // const { UI } = web;
    // UI.setLanguage('es');
    // UI.disableElements(['ribbons']);
    // UI.disableElements(['toolbarGroup-Shapes']);
    // UI.disableElements(['toolbarGroup-Edit']);
    // UI.disableElements(['toolbarGroup-Insert']);
    
    // UI.setHeaderItems(header => {
    //   header.push({
    //     type: 'actionButton',
    //     title: 'Guardar en CRM',
    //     icon: 'edit',
    //     onClick: async () => {
    //       const doc = documentViewer.getDocument();
    //       const xfdfString = await annotationManager.exportAnnotations();
    //       const data = await doc.getFileData({
    //         includeAnnotations: true,
    //         // saves the document with annotations in it
    //         xfdfString
    //       });
    //       const arr = new Uint8Array(data);
    //       const blob = new Blob([arr], { type: 'application/pdf' });
    //       const base64 = await blobToBase64(blob)
    //       console.log(base64);



    //       // Add code for handling Blob here
    //     }
    //   });
    // });

    // documentViewer.addEventListener('annotationsLoaded', () => {
    //   console.log('annotations loaded');
    // });

    // documentViewer.addEventListener('documentLoaded', () => {
    //   this.documentLoaded$.next();
    //   const rectangleAnnot = new Annotations.RectangleAnnotation({
    //     PageNumber: 1,
    //     X: 100,
    //     Y: 150,
    //     Width: 200,
    //     Height: 50,
    //     Author: annotationManager.getCurrentUser()
    //   });

    // });

  }

  ngOnInit() {
  }

  // getDocumentLoadedObservable() {
  //   return this.documentLoaded$.asObservable();
  // }
}
