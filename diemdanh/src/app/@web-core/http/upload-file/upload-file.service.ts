import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UploadFileService {
  constructor(
    private http: HttpClient
  ) { }

      // convert base64/URLEncoded data component to a file
      dataURItoBlob(dataURI: any, fileName: string): File {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new File([ia], fileName, { type: mimeString });
    }


    public uploadFile(file: File) {
        
        const formData = new FormData();
        // formData.append
        formData.append(`files[]`, file);
     
        
        // formData.append(`product[${item}]`, (temp[item] === null) ? temp[item].toString() : null);
        return this.http.post<File[]>(`http://image-service.patitek.com/api/v1/images/upload`, formData).pipe(
          map((result) => {
             
              
            return result;
          }),
          catchError((errorRes) => { throw errorRes.error; }));
      }

    // uploadFile(file: File): {

    // }
}




