import { Component, OnInit, Input, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
declare var H: any;

@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit {
  @ViewChild("map")
  public mapElement: ElementRef;
  @Input()
  public appId: any;

  @Input()
  public appCode: any;

  @Input()
  public start: any;

  @Input()
  public finish: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  public directions: any;

  private platform: any;
  private map: any;
  private routers: any;
  constructor() {
    this.platform = new H.service.Platform({
      "app_id": "3Hd8XzuAlHgaIChIR51I",
      "app_code": "M91m6qKw_ar6ubgI3spF0g"
    });
    this.directions = [];
    this.routers = this.platform.getRoutingService();
  }

  ngOnInit(): void {

  }
  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 8,
        center: { lat: "10.9597653", lng: "106.6735486" }
      }
    );
    // this.route(this.start, this.finish);
  }
  public ngOnChanges(changes: SimpleChanges) {
    if ((changes["start"] && !changes["start"].isFirstChange()) || (changes["finish"] && !changes["finish"].isFirstChange())) {
      this.route(this.start, this.finish);
    }
  }

  public route(start: any, finish: any) {
    let params = {
      "mode": "fastest;car",
      "waypoint0": "geo!" + this.start,
      "waypoint1": "geo!" + this.finish,
      "representation": "display"
    }
    this.map.removeObjects(this.map.getObjects());
    this.routers.calculateRoute(params, data => {
      if (data.response) {
        this.directions = data.response.route[0].leg[0].maneuver;
        data = data.response.route[0];
        let lineString = new H.geo.LineString();
        data.shape.forEach(point => {
          let parts = point.split(",");
          lineString.pushLatLngAlt(parts[0], parts[1]);
        });
        let routeLine = new H.map.Polyline(lineString, {
          style: { strokeColor: "blue", lineWidth: 5 }
        });
        let startMarker = new H.map.Marker({
          lat: this.start.split(",")[0],
          lng: this.start.split(",")[1]
        });
        let finishMarker = new H.map.Marker({
          lat: this.finish.split(",")[0],
          lng: this.finish.split(",")[1]
        });
        this.map.addObjects([routeLine, startMarker, finishMarker]);
        this.map.setViewBounds(routeLine.getBounds());
      }
    }, error => {
      console.error(error);
    });
  }
}
