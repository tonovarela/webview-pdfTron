
import { environment } from './../environments/environment';

export const initialParameters = {
    path:  environment.production?"demo/lib/": 'lib',
    //licenseKey:"1677019901296:7d3b1840030000000041552b61e9d8128059ec3a80c3842c4eb24d4cb7",
    annotationUser: "tonovarela (Usuario logueado)",
    isReadOnly: false,
    enableFilePicker: false,
    loadAsPDF: true,
    //isAdminUser:true,
    useDownloader: false,
    //enableRedaction:true            
    //initialDoc: '../files/application.pdf'
}