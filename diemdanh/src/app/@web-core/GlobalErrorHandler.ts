import { ErrorHandler, Injectable, Injector, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { STATUS } from './http';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(
        @Inject(Injector) private readonly injector: Injector
    ) {}
    handleError(error) {
        // if(error && error.errors &&error.length>0)

        // {
        //     for(let i=0;i<error.errors.length;i++ ){
              
        //         this.toastrService.error(error.errors[i], STATUS.FAIL, { onActivateTick: true });
        //     }
        //     console.log(error, 'error')
        // }
        // else{
        //     console.log(error);
        //     this.toastrService.error(error.error, STATUS.FAIL, { onActivateTick: true });
        // }
        
        // if (error.fields && error.fields.length > 0) {
        //     this.toastrService.error(error.fields[0].message || error.fields, STATUS.FAIL, { onActivateTick: true });
        // } else if (error.message) {
        //     this.toastrService.error(error.error, STATUS.FAIL, { onActivateTick: true });
        // }
    }
    /**
     * Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
     * @returns {} 
     */
    private get toastrService(): ToastrService {
        return this.injector.get(ToastrService);
    }
}
