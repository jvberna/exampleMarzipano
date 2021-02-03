import { Component, OnInit } from '@angular/core';
import Marzipano from 'marzipano';


@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.inicializarVisor();
  }

  inicializarVisor() {
    var panoElement = document.getElementById('pano');
    var viewerOpts = {
      controls: {
        mouseViewMode: 'drag'    // drag|qtvr
      }
    };

    var viewer = new Marzipano.Viewer(panoElement, viewerOpts)
    
    var source = Marzipano.ImageUrlSource.fromString(
      "//www.marzipano.net/media/cubemap/{f}.jpg"
    );
    
    // Create geometry.
    var geometry = new Marzipano.CubeGeometry([{ tileSize: 1024, size: 1024 }]);
    
    // Create view.
    var limiter = Marzipano.RectilinearView.limit.traditional(4096, 100*Math.PI/180);
    var view = new Marzipano.RectilinearView(null, limiter);
    
    // Create scene.
    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });
    
    // Display scene.
    scene.switchTo();
  }

}
