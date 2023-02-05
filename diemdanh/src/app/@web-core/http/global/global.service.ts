import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalService {

    constructor(
        private toastr: ToastrService,
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

    currency(denomination, value) {
        if(denomination === 'vnd') {
            let temp = value.replace(/[^0-9]/gm, '');
            temp = temp.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            return temp;
        } else if (denomination === 'usd') {

            // let newVal = value.replace(/\D/g, '');
            // var rawValue = newVal;
            // var str = (newVal=='0'?'0.0':newVal).split('.');
            // str[1] = str[1] || '0';
            // newVal= str[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') + '.' + (str[1].length==1?str[1]+'0':str[1]);
            // let newVal = value.replace(/,/g, '');
            // newVal = parseFloat(value).toLocaleString('en-US', {
            //   style: 'decimal',
            //   maximumFractionDigits: 2,
            //   minimumFractionDigits: 2
            // });
            // const temp = value.split('.');
            
            // if(temp.length >= 3) {
            //     return temp[0] + '.' + temp[1] ;
            // } else {
            //     if()
            //     let temp = value.replace(/[^0-9.]/gm, '');
            //     temp = temp.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            //     return temp;
            //     return value;
            // }
            
            // let newVal = fx(value).convert();

            // let newVal = value.replace(/[^0-9.]/gm, '');
            // newVal = newVal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            // return newVal;
            // const newVal = (parseInt(value.replace(/\.,/g, ''))).toLocaleString('en-US', { minimumFractionDigits: 2 });
            return value;
            // return value;
        } else {    
            return value;
        }
    }
    
}
