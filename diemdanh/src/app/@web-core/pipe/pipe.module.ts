import { NgModule } from '@angular/core';
import { convertDataViewPipe } from './convertDataView.pipe';
// import { convertDataPrice } from './price.pipe';

@NgModule({
    imports: [],
    exports: [convertDataViewPipe],
    declarations: [convertDataViewPipe],
    providers: [],
})
export class PipeModule { }
