(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{rIor:function(t,e,i){"use strict";i.d(e,"a",(function(){return m})),i.d(e,"b",(function(){return d}));var r=i("fXoL"),o=i("ofXK"),s=i("jhN1");const a=["wrapper"],h=["sourceImage"];function n(t,e){if(1&t){const t=r.Qb();r.Pb(0,"img",4,5),r.Wb("load",(function(){return r.pc(t),r.Yb().imageLoadedInView()})),r.Ob()}if(2&t){const t=r.Yb();r.vc("visibility",t.imageVisible?"visible":"hidden")("transform",t.safeTransformStyle),r.ec("src",t.safeImgDataUrl,r.rc)}}function p(t,e){if(1&t){const t=r.Qb();r.Nb(0),r.Pb(1,"span",9),r.Wb("mousedown",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"topleft")}))("touchstart",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"topleft")})),r.Kb(2,"span",10),r.Ob(),r.Pb(3,"span",11),r.Kb(4,"span",10),r.Ob(),r.Pb(5,"span",12),r.Wb("mousedown",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"topright")}))("touchstart",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"topright")})),r.Kb(6,"span",10),r.Ob(),r.Pb(7,"span",13),r.Kb(8,"span",10),r.Ob(),r.Pb(9,"span",14),r.Wb("mousedown",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"bottomright")}))("touchstart",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"bottomright")})),r.Kb(10,"span",10),r.Ob(),r.Pb(11,"span",15),r.Kb(12,"span",10),r.Ob(),r.Pb(13,"span",16),r.Wb("mousedown",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"bottomleft")}))("touchstart",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"bottomleft")})),r.Kb(14,"span",10),r.Ob(),r.Pb(15,"span",17),r.Kb(16,"span",10),r.Ob(),r.Pb(17,"span",18),r.Wb("mousedown",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"top")}))("touchstart",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"top")})),r.Ob(),r.Pb(18,"span",19),r.Wb("mousedown",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"right")}))("touchstart",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"right")})),r.Ob(),r.Pb(19,"span",20),r.Wb("mousedown",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"bottom")}))("touchstart",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"bottom")})),r.Ob(),r.Pb(20,"span",21),r.Wb("mousedown",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"left")}))("touchstart",(function(e){r.pc(t);const i=r.Yb(2);return i.startMove(e,i.moveTypes.Resize,"left")})),r.Ob(),r.Mb()}}function c(t,e){if(1&t){const t=r.Qb();r.Pb(0,"div",6),r.Wb("keydown",(function(e){return r.pc(t),r.Yb().keyboardAccess(e)})),r.Pb(1,"div",7),r.Wb("mousedown",(function(e){r.pc(t);const i=r.Yb();return i.startMove(e,i.moveTypes.Move)}))("touchstart",(function(e){r.pc(t);const i=r.Yb();return i.startMove(e,i.moveTypes.Move)})),r.Ob(),r.xc(2,p,21,0,"ng-container",8),r.Ob()}if(2&t){const t=r.Yb();r.vc("top",t.cropper.y1,"px")("left",t.cropper.x1,"px")("width",t.cropper.x2-t.cropper.x1,"px")("height",t.cropper.y2-t.cropper.y1,"px")("margin-left","center"===t.alignImage?t.marginLeft:null)("visibility",t.imageVisible?"visible":"hidden"),r.Bb("rounded",t.roundCropper),r.xb(2),r.ec("ngIf",!t.hideResizeSquares)}}const g={Move:"move",Resize:"resize",Pinch:"pinch"};let m=(()=>{class t{constructor(t,e){this.sanitizer=t,this.cd=e,this.Hammer="undefined"!=typeof window?window.Hammer:null,this.setImageMaxSizeRetries=0,this.cropperScaledMinWidth=20,this.cropperScaledMinHeight=20,this.cropperScaledMaxWidth=20,this.cropperScaledMaxHeight=20,this.exifTransform={rotate:0,flip:!1},this.autoRotateSupported=new Promise(t=>{const e=new Image;e.onload=()=>{t(1===e.width&&2===e.height)},e.src="data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q=="}),this.stepSize=3,this.marginLeft="0px",this.imageVisible=!1,this.moveTypes=g,this.format="png",this.maintainAspectRatio=!0,this.transform={},this.aspectRatio=1,this.resizeToWidth=0,this.resizeToHeight=0,this.cropperMinWidth=0,this.cropperMinHeight=0,this.cropperMaxHeight=0,this.cropperMaxWidth=0,this.cropperStaticWidth=0,this.cropperStaticHeight=0,this.canvasRotation=0,this.initialStepSize=3,this.roundCropper=!1,this.onlyScaleDown=!1,this.imageQuality=92,this.autoCrop=!0,this.containWithinAspectRatio=!1,this.hideResizeSquares=!1,this.cropper={x1:-100,y1:-100,x2:1e4,y2:1e4},this.alignImage="center",this.disabled=!1,this.imageCropped=new r.n,this.startCropImage=new r.n,this.imageLoaded=new r.n,this.cropperReady=new r.n,this.loadImageFailed=new r.n,this.initCropper()}ngOnChanges(t){this.cropperStaticHeight&&this.cropperStaticWidth&&(this.hideResizeSquares=!0,this.cropperMinWidth=this.cropperStaticWidth,this.cropperMinHeight=this.cropperStaticHeight,this.cropperMaxHeight=this.cropperStaticHeight,this.cropperMaxWidth=this.cropperStaticWidth,this.maintainAspectRatio=!1),this.onChangesInputImage(t),this.originalImage&&this.originalImage.complete&&this.exifTransform&&(t.containWithinAspectRatio||t.canvasRotation)&&this.transformOriginalImage(),t.cropper&&(this.setMaxSize(),this.setCropperScaledMinSize(),this.setCropperScaledMaxSize(),this.checkCropperPosition(!1),this.doAutoCrop(),this.cd.markForCheck()),t.aspectRatio&&this.imageVisible&&this.resetCropperPosition(),t.transform&&(this.transform=this.transform||{},this.setCssTransform(),this.doAutoCrop())}onChangesInputImage(t){(t.imageChangedEvent||t.imageURL||t.imageBase64||t.imageFile)&&this.initCropper(),t.imageChangedEvent&&this.isValidImageChangedEvent()&&this.loadImageFile(this.imageChangedEvent.target.files[0]),t.imageURL&&this.imageURL&&this.loadImageFromURL(this.imageURL),t.imageBase64&&this.imageBase64&&this.loadBase64Image(this.imageBase64),t.imageFile&&this.imageFile&&this.loadImageFile(this.imageFile)}isValidImageChangedEvent(){return this.imageChangedEvent&&this.imageChangedEvent.target&&this.imageChangedEvent.target.files&&this.imageChangedEvent.target.files.length>0}setCssTransform(){this.safeTransformStyle=this.sanitizer.bypassSecurityTrustStyle("scaleX("+(this.transform.scale||1)*(this.transform.flipH?-1:1)+")scaleY("+(this.transform.scale||1)*(this.transform.flipV?-1:1)+")rotate("+(this.transform.rotate||0)+"deg)")}ngOnInit(){this.stepSize=this.initialStepSize,this.activatePinchGesture()}initCropper(){this.imageVisible=!1,this.transformedImage=null,this.safeImgDataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=",this.moveStart={active:!1,type:null,position:null,x1:0,y1:0,x2:0,y2:0,clientX:0,clientY:0},this.maxSize={width:0,height:0},this.originalSize={width:0,height:0},this.transformedSize={width:0,height:0},this.cropper.x1=-100,this.cropper.y1=-100,this.cropper.x2=1e4,this.cropper.y2=1e4}loadImage(t,e){this.isValidImageType(e)?this.loadBase64Image(t):this.loadImageFailed.emit()}loadImageFile(t){const e=new FileReader;e.onload=e=>this.loadImage(e.target.result,t.type),e.onerror=t=>{this.loadImageFailed.emit(),this.originalImage=null,this.originalBase64=null,console.error(t)},e.readAsDataURL(t)}isValidImageType(t){return/image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(t)}loadBase64Image(t){this.autoRotateSupported.then(e=>this.checkExifAndLoadBase64Image(t,e)).then(()=>this.transformOriginalImage()).catch(t=>{this.loadImageFailed.emit(),this.originalImage=null,this.originalBase64=null,console.error(t)})}checkExifAndLoadBase64Image(t,e){return new Promise((i,r)=>{this.originalImage=new Image,this.originalImage.onload=()=>{this.originalBase64=t,this.exifTransform=function(t){switch("string"==typeof t&&(t=function(t){const e=new DataView(function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");const e=atob(t),i=e.length,r=new Uint8Array(i);for(let o=0;o<i;o++)r[o]=e.charCodeAt(o);return r.buffer}(t));if(65496!=e.getUint16(0,!1))return-2;const i=e.byteLength;let r=2;for(;r<i;){if(e.getUint16(r+2,!1)<=8)return-1;const t=e.getUint16(r,!1);if(r+=2,65505==t){if(1165519206!=e.getUint32(r+=2,!1))return-1;const t=18761==e.getUint16(r+=6,!1);r+=e.getUint32(r+4,t);const i=e.getUint16(r,t);r+=2;for(let o=0;o<i;o++)if(274==e.getUint16(r+12*o,t))return e.getUint16(r+12*o+8,t)}else{if(65280!=(65280&t))break;r+=e.getUint16(r,!1)}}return-1}(t)),t){case 2:return{rotate:0,flip:!0};case 3:return{rotate:2,flip:!1};case 4:return{rotate:2,flip:!0};case 5:return{rotate:1,flip:!0};case 6:return{rotate:1,flip:!1};case 7:return{rotate:3,flip:!0};case 8:return{rotate:3,flip:!1};default:return{rotate:0,flip:!1}}}(e?-1:t),this.originalSize.width=this.originalImage.naturalWidth,this.originalSize.height=this.originalImage.naturalHeight,i()},this.originalImage.onerror=r,this.originalImage.src=t})}loadImageFromURL(t){const e=new Image;e.onerror=()=>this.loadImageFailed.emit(),e.onload=()=>{const t=document.createElement("canvas"),i=t.getContext("2d");t.width=e.width,t.height=e.height,i.drawImage(e,0,0),this.loadBase64Image(t.toDataURL())},e.crossOrigin="anonymous",e.src=t}transformOriginalImage(){if(!this.originalImage||!this.originalImage.complete||!this.exifTransform)return Promise.reject(new Error("No image loaded"));const t=this.transformImageBase64();return this.setTransformedImage(t)}transformImageBase64(){const t=this.canvasRotation+this.exifTransform.rotate;if(0===t&&!this.exifTransform.flip&&!this.containWithinAspectRatio)return this.originalBase64;const e=this.getTransformedSize(),i=document.createElement("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");return r.setTransform(this.exifTransform.flip?-1:1,0,0,1,i.width/2,i.height/2),r.rotate(Math.PI*(t/2)),r.drawImage(this.originalImage,-this.originalSize.width/2,-this.originalSize.height/2),i.toDataURL()}getTransformedSize(){const t=this.canvasRotation+this.exifTransform.rotate;if(this.containWithinAspectRatio){if(t%2){const t=this.originalSize.height/this.aspectRatio;return{width:Math.max(this.originalSize.height,this.originalSize.width*this.aspectRatio),height:Math.max(this.originalSize.width,t)}}{const t=this.originalSize.width/this.aspectRatio;return{width:Math.max(this.originalSize.width,this.originalSize.height*this.aspectRatio),height:Math.max(this.originalSize.height,t)}}}return t%2?{height:this.originalSize.width,width:this.originalSize.height}:{width:this.originalSize.width,height:this.originalSize.height}}setTransformedImage(t){return new Promise(e=>{this.transformedBase64=t,this.safeImgDataUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t),this.transformedImage=new Image,this.transformedImage.onload=()=>{this.transformedSize.width=this.transformedImage.naturalWidth,this.transformedSize.height=this.transformedImage.naturalHeight,this.cd.markForCheck(),e()},this.transformedImage.src=this.transformedBase64})}imageLoadedInView(){null!=this.transformedImage&&(this.imageLoaded.emit(this.transformedImage),this.setImageMaxSizeRetries=0,setTimeout(()=>this.checkImageMaxSizeRecursively()))}checkImageMaxSizeRecursively(){this.setImageMaxSizeRetries>40?this.loadImageFailed.emit():this.sourceImageLoaded()?(this.setMaxSize(),this.setCropperScaledMinSize(),this.setCropperScaledMaxSize(),this.resetCropperPosition(),this.cropperReady.emit(Object.assign({},this.maxSize)),this.cd.markForCheck()):(this.setImageMaxSizeRetries++,setTimeout(()=>this.checkImageMaxSizeRecursively(),50))}sourceImageLoaded(){return this.sourceImage&&this.sourceImage.nativeElement&&this.sourceImage.nativeElement.offsetWidth>0}onResize(){this.resizeCropperPosition(),this.setMaxSize(),this.setCropperScaledMinSize(),this.setCropperScaledMaxSize()}activatePinchGesture(){if(this.Hammer){const t=new this.Hammer(this.wrapper.nativeElement);t.get("pinch").set({enable:!0}),t.on("pinchmove",this.onPinch.bind(this)),t.on("pinchend",this.pinchStop.bind(this)),t.on("pinchstart",this.startPinch.bind(this))}else Object(r.T)()&&console.warn("[NgxImageCropper] Could not find HammerJS - Pinch Gesture won't work")}resizeCropperPosition(){const t=this.sourceImage.nativeElement;this.maxSize.width===t.offsetWidth&&this.maxSize.height===t.offsetHeight||(this.cropper.x1=this.cropper.x1*t.offsetWidth/this.maxSize.width,this.cropper.x2=this.cropper.x2*t.offsetWidth/this.maxSize.width,this.cropper.y1=this.cropper.y1*t.offsetHeight/this.maxSize.height,this.cropper.y2=this.cropper.y2*t.offsetHeight/this.maxSize.height)}resetCropperPosition(){const t=this.sourceImage.nativeElement;if(this.cropperStaticHeight&&this.cropperStaticWidth)this.cropper.x1=0,this.cropper.x2=t.offsetWidth>this.cropperStaticWidth?this.cropperStaticWidth:t.offsetWidth,this.cropper.y1=0,this.cropper.y2=t.offsetHeight>this.cropperStaticHeight?this.cropperStaticHeight:t.offsetHeight;else{const e=Math.min(this.cropperScaledMaxWidth,t.offsetWidth),i=Math.min(this.cropperScaledMaxHeight,t.offsetHeight);if(this.maintainAspectRatio)if(e/this.aspectRatio<i){this.cropper.x1=0,this.cropper.x2=e;const i=e/this.aspectRatio;this.cropper.y1=(t.offsetHeight-i)/2,this.cropper.y2=this.cropper.y1+i}else{this.cropper.y1=0,this.cropper.y2=i;const e=i*this.aspectRatio;this.cropper.x1=(t.offsetWidth-e)/2,this.cropper.x2=this.cropper.x1+e}else this.cropper.x1=0,this.cropper.x2=e,this.cropper.y1=0,this.cropper.y2=i}this.doAutoCrop(),this.imageVisible=!0}keyboardAccess(t){this.changeKeyboardStepSize(t),this.keyboardMoveCropper(t)}changeKeyboardStepSize(t){t.key>="1"&&t.key<="9"&&(this.stepSize=+t.key)}keyboardMoveCropper(t){if(!["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key))return;const e=t.shiftKey?g.Resize:g.Move,i=t.altKey?this.getInvertedPositionForKey(t.key):this.getPositionForKey(t.key),r=this.getEventForKey(t.key,this.stepSize);t.preventDefault(),t.stopPropagation(),this.startMove({clientX:0,clientY:0},e,i),this.moveImg(r),this.moveStop()}getPositionForKey(t){switch(t){case"ArrowUp":return"top";case"ArrowRight":return"right";case"ArrowDown":return"bottom";case"ArrowLeft":default:return"left"}}getInvertedPositionForKey(t){switch(t){case"ArrowUp":return"bottom";case"ArrowRight":return"left";case"ArrowDown":return"top";case"ArrowLeft":default:return"right"}}getEventForKey(t,e){switch(t){case"ArrowUp":return{clientX:0,clientY:-1*e};case"ArrowRight":return{clientX:e,clientY:0};case"ArrowDown":return{clientX:0,clientY:e};case"ArrowLeft":default:return{clientX:-1*e,clientY:0}}}startMove(t,e,i=null){this.moveStart&&this.moveStart.active&&this.moveStart.type===g.Pinch||(t.preventDefault&&t.preventDefault(),this.moveStart=Object.assign({active:!0,type:e,position:i,clientX:this.getClientX(t),clientY:this.getClientY(t)},this.cropper))}startPinch(t){this.safeImgDataUrl&&(t.preventDefault&&t.preventDefault(),this.moveStart=Object.assign({active:!0,type:g.Pinch,position:"center",clientX:this.cropper.x1+(this.cropper.x2-this.cropper.x1)/2,clientY:this.cropper.y1+(this.cropper.y2-this.cropper.y1)/2},this.cropper))}moveImg(t){this.moveStart.active&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),this.moveStart.type===g.Move?(this.move(t),this.checkCropperPosition(!0)):this.moveStart.type===g.Resize&&(this.cropperStaticWidth||this.cropperStaticHeight||this.resize(t),this.checkCropperPosition(!1)),this.cd.detectChanges())}onPinch(t){this.moveStart.active&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),this.moveStart.type===g.Pinch&&(this.resize(t),this.checkCropperPosition(!1)),this.cd.detectChanges())}setMaxSize(){if(this.sourceImage){const t=this.sourceImage.nativeElement;this.maxSize.width=t.offsetWidth,this.maxSize.height=t.offsetHeight,this.marginLeft=this.sanitizer.bypassSecurityTrustStyle("calc(50% - "+this.maxSize.width/2+"px)")}}setCropperScaledMinSize(){this.transformedImage?(this.setCropperScaledMinWidth(),this.setCropperScaledMinHeight()):(this.cropperScaledMinWidth=20,this.cropperScaledMinHeight=20)}setCropperScaledMinWidth(){this.cropperScaledMinWidth=this.cropperMinWidth>0?Math.max(20,this.cropperMinWidth/this.transformedImage.width*this.maxSize.width):20}setCropperScaledMinHeight(){this.cropperScaledMinHeight=this.maintainAspectRatio?Math.max(20,this.cropperScaledMinWidth/this.aspectRatio):this.cropperMinHeight>0?Math.max(20,this.cropperMinHeight/this.transformedImage.height*this.maxSize.height):20}setCropperScaledMaxSize(){if(this.transformedImage){const t=this.transformedSize.width/this.maxSize.width;this.cropperScaledMaxWidth=this.cropperMaxWidth>20?this.cropperMaxWidth/t:this.maxSize.width,this.cropperScaledMaxHeight=this.cropperMaxHeight>20?this.cropperMaxHeight/t:this.maxSize.height,this.maintainAspectRatio&&(this.cropperScaledMaxWidth>this.cropperScaledMaxHeight*this.aspectRatio?this.cropperScaledMaxWidth=this.cropperScaledMaxHeight*this.aspectRatio:this.cropperScaledMaxWidth<this.cropperScaledMaxHeight*this.aspectRatio&&(this.cropperScaledMaxHeight=this.cropperScaledMaxWidth/this.aspectRatio))}else this.cropperScaledMaxWidth=this.maxSize.width,this.cropperScaledMaxHeight=this.maxSize.height}checkCropperPosition(t=!1){this.cropper.x1<0&&(this.cropper.x2-=t?this.cropper.x1:0,this.cropper.x1=0),this.cropper.y1<0&&(this.cropper.y2-=t?this.cropper.y1:0,this.cropper.y1=0),this.cropper.x2>this.maxSize.width&&(this.cropper.x1-=t?this.cropper.x2-this.maxSize.width:0,this.cropper.x2=this.maxSize.width),this.cropper.y2>this.maxSize.height&&(this.cropper.y1-=t?this.cropper.y2-this.maxSize.height:0,this.cropper.y2=this.maxSize.height)}moveStop(){this.moveStart.active&&(this.moveStart.active=!1,this.doAutoCrop())}pinchStop(){this.moveStart.active&&(this.moveStart.active=!1,this.doAutoCrop())}move(t){const e=this.getClientX(t)-this.moveStart.clientX,i=this.getClientY(t)-this.moveStart.clientY;this.cropper.x1=this.moveStart.x1+e,this.cropper.y1=this.moveStart.y1+i,this.cropper.x2=this.moveStart.x2+e,this.cropper.y2=this.moveStart.y2+i}resize(t){const e=this.getClientX(t)-this.moveStart.clientX,i=this.getClientY(t)-this.moveStart.clientY;switch(this.moveStart.position){case"left":this.cropper.x1=Math.min(Math.max(this.moveStart.x1+e,this.cropper.x2-this.cropperScaledMaxWidth),this.cropper.x2-this.cropperScaledMinWidth);break;case"topleft":this.cropper.x1=Math.min(Math.max(this.moveStart.x1+e,this.cropper.x2-this.cropperScaledMaxWidth),this.cropper.x2-this.cropperScaledMinWidth),this.cropper.y1=Math.min(Math.max(this.moveStart.y1+i,this.cropper.y2-this.cropperScaledMaxHeight),this.cropper.y2-this.cropperScaledMinHeight);break;case"top":this.cropper.y1=Math.min(Math.max(this.moveStart.y1+i,this.cropper.y2-this.cropperScaledMaxHeight),this.cropper.y2-this.cropperScaledMinHeight);break;case"topright":this.cropper.x2=Math.max(Math.min(this.moveStart.x2+e,this.cropper.x1+this.cropperScaledMaxWidth),this.cropper.x1+this.cropperScaledMinWidth),this.cropper.y1=Math.min(Math.max(this.moveStart.y1+i,this.cropper.y2-this.cropperScaledMaxHeight),this.cropper.y2-this.cropperScaledMinHeight);break;case"right":this.cropper.x2=Math.max(Math.min(this.moveStart.x2+e,this.cropper.x1+this.cropperScaledMaxWidth),this.cropper.x1+this.cropperScaledMinWidth);break;case"bottomright":this.cropper.x2=Math.max(Math.min(this.moveStart.x2+e,this.cropper.x1+this.cropperScaledMaxWidth),this.cropper.x1+this.cropperScaledMinWidth),this.cropper.y2=Math.max(Math.min(this.moveStart.y2+i,this.cropper.y1+this.cropperScaledMaxHeight),this.cropper.y1+this.cropperScaledMinHeight);break;case"bottom":this.cropper.y2=Math.max(Math.min(this.moveStart.y2+i,this.cropper.y1+this.cropperScaledMaxHeight),this.cropper.y1+this.cropperScaledMinHeight);break;case"bottomleft":this.cropper.x1=Math.min(Math.max(this.moveStart.x1+e,this.cropper.x2-this.cropperScaledMaxWidth),this.cropper.x2-this.cropperScaledMinWidth),this.cropper.y2=Math.max(Math.min(this.moveStart.y2+i,this.cropper.y1+this.cropperScaledMaxHeight),this.cropper.y1+this.cropperScaledMinHeight);break;case"center":const r=t.scale,o=Math.abs(this.moveStart.x2-this.moveStart.x1)*r,s=Math.abs(this.moveStart.y2-this.moveStart.y1)*r,a=this.cropper.x1,h=this.cropper.y1;this.cropper.x1=Math.min(Math.max(this.moveStart.clientX-o/2,this.moveStart.clientX-this.cropperScaledMaxWidth/2),this.cropper.x2-this.cropperScaledMinWidth),this.cropper.y1=Math.min(Math.max(this.moveStart.clientY-s/2,this.moveStart.clientY-this.cropperScaledMaxHeight/2),this.cropper.y2-this.cropperScaledMinHeight),this.cropper.x2=Math.max(Math.min(this.moveStart.clientX+o/2,a+this.cropperScaledMaxWidth/2),a+this.cropperScaledMinWidth),this.cropper.y2=Math.max(Math.min(this.moveStart.clientY+s/2,h+this.cropperScaledMaxHeight/2),h+this.cropperScaledMinHeight)}this.maintainAspectRatio&&this.checkAspectRatio()}checkAspectRatio(){let t=0,e=0;switch(this.moveStart.position){case"top":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"bottom":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"topleft":this.cropper.y1=this.cropper.y2-(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(0-this.cropper.x1,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x1+=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"topright":this.cropper.y1=this.cropper.y2-(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"right":case"bottomright":this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"left":case"bottomleft":this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(0-this.cropper.x1,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x1+=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"center":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio,this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio;const i=Math.max(0-this.cropper.x1,0),r=Math.max(this.cropper.x2-this.maxSize.width,0),o=Math.max(this.cropper.y2-this.maxSize.height,0),s=Math.max(0-this.cropper.y1,0);(i>0||r>0||o>0||s>0)&&(this.cropper.x1+=o*this.aspectRatio>i?o*this.aspectRatio:i,this.cropper.x2-=s*this.aspectRatio>r?s*this.aspectRatio:r,this.cropper.y1+=s*this.aspectRatio>r?s:r/this.aspectRatio,this.cropper.y2-=o*this.aspectRatio>i?o:i/this.aspectRatio)}}doAutoCrop(){this.autoCrop&&this.crop()}crop(){if(this.sourceImage&&this.sourceImage.nativeElement&&null!=this.transformedImage){this.startCropImage.emit();const t=this.getImagePosition(),e=t.x2-t.x1,i=t.y2-t.y1,r=document.createElement("canvas");r.width=e,r.height=i;const o=r.getContext("2d");if(o){null!=this.backgroundColor&&(o.fillStyle=this.backgroundColor,o.fillRect(0,0,e,i));const s=(this.transform.scale||1)*(this.transform.flipH?-1:1),a=(this.transform.scale||1)*(this.transform.flipV?-1:1);o.setTransform(s,0,0,a,this.transformedSize.width/2,this.transformedSize.height/2),o.translate(-t.x1/s,-t.y1/a),o.rotate((this.transform.rotate||0)*Math.PI/180),o.drawImage(this.transformedImage,-this.transformedSize.width/2,-this.transformedSize.height/2);const h={width:e,height:i,imagePosition:t,cropperPosition:Object.assign({},this.cropper)};this.containWithinAspectRatio&&(h.offsetImagePosition=this.getOffsetImagePosition());const n=this.getResizeRatio(e,i);return 1!==n&&(h.width=Math.round(e*n),h.height=this.maintainAspectRatio?Math.round(h.width/this.aspectRatio):Math.round(i*n),function(t,e,i){const r=t.width,o=t.height,s=r/(e=Math.round(e)),a=o/(i=Math.round(i)),h=Math.ceil(s/2),n=Math.ceil(a/2),p=t.getContext("2d");if(p){const c=p.getImageData(0,0,r,o),g=p.createImageData(e,i),m=c.data,d=g.data;for(let t=0;t<i;t++)for(let i=0;i<e;i++){const p=4*(i+t*e),c=t*a;let g=0,l=0,x=0,u=0,f=0,M=0,S=0;const A=Math.floor(i*s),b=Math.floor(t*a);let y=Math.ceil((i+1)*s),v=Math.ceil((t+1)*a);y=Math.min(y,r),v=Math.min(v,o);for(let t=b;t<v;t++){const e=Math.abs(c-t)/n,o=i*s,a=e*e;for(let i=A;i<y;i++){const e=Math.abs(o-i)/h,s=Math.sqrt(a+e*e);if(s>=1)continue;g=2*s*s*s-3*s*s+1;const n=4*(i+t*r);S+=g*m[n+3],x+=g,m[n+3]<255&&(g=g*m[n+3]/250),u+=g*m[n],f+=g*m[n+1],M+=g*m[n+2],l+=g}}d[p]=u/l,d[p+1]=f/l,d[p+2]=M/l,d[p+3]=S/x}t.width=e,t.height=i,p.putImageData(g,0,0)}}(r,h.width,h.height)),h.base64=this.cropToBase64(r),this.imageCropped.emit(h),h}}return null}getImagePosition(){const t=this.transformedSize.width/this.sourceImage.nativeElement.offsetWidth,e={x1:Math.round(this.cropper.x1*t),y1:Math.round(this.cropper.y1*t),x2:Math.round(this.cropper.x2*t),y2:Math.round(this.cropper.y2*t)};return this.containWithinAspectRatio||(e.x1=Math.max(e.x1,0),e.y1=Math.max(e.y1,0),e.x2=Math.min(e.x2,this.transformedSize.width),e.y2=Math.min(e.y2,this.transformedSize.height)),e}getOffsetImagePosition(){const t=this.transformedSize.width/this.sourceImage.nativeElement.offsetWidth;let e,i;(this.canvasRotation+this.exifTransform.rotate)%2?(e=(this.transformedSize.width-this.originalSize.height)/2,i=(this.transformedSize.height-this.originalSize.width)/2):(e=(this.transformedSize.width-this.originalSize.width)/2,i=(this.transformedSize.height-this.originalSize.height)/2);const r={x1:Math.round(this.cropper.x1*t)-e,y1:Math.round(this.cropper.y1*t)-i,x2:Math.round(this.cropper.x2*t)-e,y2:Math.round(this.cropper.y2*t)-i};return this.containWithinAspectRatio||(r.x1=Math.max(r.x1,0),r.y1=Math.max(r.y1,0),r.x2=Math.min(r.x2,this.transformedSize.width),r.y2=Math.min(r.y2,this.transformedSize.height)),r}cropToBase64(t){return t.toDataURL("image/"+this.format,this.getQuality())}getQuality(){return Math.min(1,Math.max(0,this.imageQuality/100))}getResizeRatio(t,e){const i=this.resizeToWidth/t,r=this.resizeToHeight/e,o=new Array;this.resizeToWidth>0&&o.push(i),this.resizeToHeight>0&&o.push(r);const s=0===o.length?1:Math.min(...o);return s>1&&!this.onlyScaleDown?s:Math.min(s,1)}getClientX(t){return(t.touches&&t.touches[0]?t.touches[0].clientX:t.clientX)||0}getClientY(t){return(t.touches&&t.touches[0]?t.touches[0].clientY:t.clientY)||0}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(s.b),r.Jb(r.h))},t.\u0275cmp=r.Db({type:t,selectors:[["image-cropper"]],viewQuery:function(t,e){var i;1&t&&(r.uc(a,!0),r.Dc(h,!0)),2&t&&(r.lc(i=r.Xb())&&(e.wrapper=i.first),r.lc(i=r.Xb())&&(e.sourceImage=i.first))},hostVars:4,hostBindings:function(t,e){1&t&&r.Wb("resize",(function(){return e.onResize()}),!1,r.oc)("mousemove",(function(t){return e.moveImg(t)}),!1,r.nc)("touchmove",(function(t){return e.moveImg(t)}),!1,r.nc)("mouseup",(function(){return e.moveStop()}),!1,r.nc)("touchend",(function(){return e.moveStop()}),!1,r.nc),2&t&&(r.vc("text-align",e.alignImage),r.Bb("disabled",e.disabled))},inputs:{format:"format",maintainAspectRatio:"maintainAspectRatio",transform:"transform",aspectRatio:"aspectRatio",resizeToWidth:"resizeToWidth",resizeToHeight:"resizeToHeight",cropperMinWidth:"cropperMinWidth",cropperMinHeight:"cropperMinHeight",cropperMaxHeight:"cropperMaxHeight",cropperMaxWidth:"cropperMaxWidth",cropperStaticWidth:"cropperStaticWidth",cropperStaticHeight:"cropperStaticHeight",canvasRotation:"canvasRotation",initialStepSize:"initialStepSize",roundCropper:"roundCropper",onlyScaleDown:"onlyScaleDown",imageQuality:"imageQuality",autoCrop:"autoCrop",containWithinAspectRatio:"containWithinAspectRatio",hideResizeSquares:"hideResizeSquares",cropper:"cropper",alignImage:"alignImage",disabled:"disabled",imageChangedEvent:"imageChangedEvent",imageURL:"imageURL",imageBase64:"imageBase64",imageFile:"imageFile",backgroundColor:"backgroundColor"},outputs:{imageCropped:"imageCropped",startCropImage:"startCropImage",imageLoaded:"imageLoaded",cropperReady:"cropperReady",loadImageFailed:"loadImageFailed"},features:[r.vb],decls:5,vars:10,consts:[["wrapper",""],["class","source-image",3,"src","visibility","transform","load",4,"ngIf"],[1,"overlay"],["class","cropper","tabindex","0",3,"rounded","top","left","width","height","margin-left","visibility","keydown",4,"ngIf"],[1,"source-image",3,"src","load"],["sourceImage",""],["tabindex","0",1,"cropper",3,"keydown"],[1,"move",3,"mousedown","touchstart"],[4,"ngIf"],[1,"resize","topleft",3,"mousedown","touchstart"],[1,"square"],[1,"resize","top"],[1,"resize","topright",3,"mousedown","touchstart"],[1,"resize","right"],[1,"resize","bottomright",3,"mousedown","touchstart"],[1,"resize","bottom"],[1,"resize","bottomleft",3,"mousedown","touchstart"],[1,"resize","left"],[1,"resize-bar","top",3,"mousedown","touchstart"],[1,"resize-bar","right",3,"mousedown","touchstart"],[1,"resize-bar","bottom",3,"mousedown","touchstart"],[1,"resize-bar","left",3,"mousedown","touchstart"]],template:function(t,e){1&t&&(r.Pb(0,"div",null,0),r.xc(2,n,2,5,"img",1),r.Kb(3,"div",2),r.xc(4,c,3,15,"div",3),r.Ob()),2&t&&(r.vc("background",e.imageVisible&&e.backgroundColor),r.xb(2),r.ec("ngIf",e.safeImgDataUrl),r.xb(1),r.vc("width",e.maxSize.width,"px")("height",e.maxSize.height,"px")("margin-left","center"===e.alignImage?e.marginLeft:null),r.xb(1),r.ec("ngIf",e.imageVisible))},directives:[o.l],styles:['[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:"";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:focus   .move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{display:none}'],changeDetection:0}),t})(),d=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[o.c]]}),t})()}}]);