import React from 'react';
import {Map, Marker, Popup, WMSTileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet'
import Minificha from './mini-ficha.js'
import Ubicacion from './ubicacion.js'
import Home from './home.js'
import LlevaCuentaPopUps from './llevaCuentaPopUps.js'
import UbicacionRT from './ubicacionRT.js';
require('react-leaflet-markercluster/dist/styles.min.css');


class Mapa extends React.Component{  
  
  constructor(props){

    super(props)

    this.state = {

      parametrosMapa: {
        centro: [-40.65, -71.3498],
        zoom: 7,
        viewport: {center: [-40.65, -71.3498], zoom: 7}
      }

    }

  }

  revertir = (arreglo2D) => {

    const uno = arreglo2D[0]
    const dos = arreglo2D[1]

    return [dos,uno]
  
  }

  irHome = () => {

     
    
  
    let localidad_actual = this.props.localidades.features.filter((localidad,indice) => {

      if(localidad.properties.nombre === this.props.localidad)
      {
        return localidad
      }
    })      

    

    if(localidad_actual.length === 0)
    {
      this.setState({viewport: {center: [-40.65, -71.3498], zoom: 7}, centro: [-40.65, -71.3498], zoom: 7})
    }
    else
    {   

      this.setState({viewport: {center: this.revertir(localidad_actual[0].geometry.coordinates), zoom: localidad_actual[0].properties.zoom}, centro: this.revertir(localidad_actual[0].geometry.coordinates), zoom: localidad_actual[0].properties.zoom})
       
    }

    
    
    

  }

  
  pasaUbicacion = (ubicacion) => {
    
    this.setState({viewport: {center: [ubicacion.latitude, ubicacion.longitude], zoom: 19}, centro:  [ubicacion.latitude, ubicacion.longitude], zoom: 19})

  }

  cambiaViewPort = (v) => {

    let vcentro = v.center
    let vzoom = v.zoom

    this.setState((state) => (state.parametrosMapa.viewport = v))

 
  }

  terminoDeCargarPopUps = () => {

    this.props.termino()

  }

  
    
   
  render(){

      
    let arbolite = this.props.datos

    

      return(

      <React.Fragment>     

            

            <Ubicacion pasaUbicacion={this.pasaUbicacion}/>
            <Home irHome={this.irHome}/>
    
            {/*<Map center={this.props.centro} zoom={this.props.zoom} crs={L.CRS.EPSG4326}>*/}
            <Map center={this.props.centro} 
              zoom={this.props.zoom}  
              animated = {true}
              useFlyTo = {true}
              viewport = {this.state.parametrosMapa.viewport !== this.props.viewport ? this.state.viewport : this.props.viewport}               
              //onViewportChanged={this.cambiaViewPort} 
              >
            
              {/*<WMSTileLayer  url="http://wms.ign.gob.ar/geoserver/wms" layers='capabaseargenmap' format='image/png' transparent={false} attribution="IGN" maxZoom={30} />  */}
              <WMSTileLayer  url=" https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" format='image/png' transparent={false} attribution="Open Street Maps" maxZoom={19} />
             
                  <UbicacionRT />
                   
                    <MarkerClusterGroup disableClusteringAtZoom={18}>
                    {arbolite.map((arbol,i) => {
                      const urlIcono = "https://www.arbolesurbanos.com.ar/iconos/" + arbol.properties.magnitud.toString() + "/" + arbol.properties.imagen
                      const propiedadesIcono = {iconUrl: urlIcono, iconAnchor:[22,21]}
                      const icono = new L.Icon(propiedadesIcono)
                      let posicion = []
                      posicion[0] = arbol.geometry.coordinates[1]
                      posicion[1] = arbol.geometry.coordinates[0]
                        return(                  
                        <Marker position={posicion} key={i} icon={icono}>
                        
                        <LlevaCuentaPopUps numero={i + 1} cantidad={arbolite.length} termino={this.terminoDeCargarPopUps}/>

                        <Popup autoPan={true} autoPanPadding={[30,30]} closeButton={false}>                          
                              <Minificha nombrevulgar={arbol.properties.nombrevulgar} 
                              nombrecientifico={arbol.properties.nombrecientifico} 
                              magnitud={arbol.properties.magnitud}
                              urlficha={arbol.properties.url_ficha}
                              follaje={arbol.properties.follaje}
                              tipo={arbol.properties.tipo}
                              thumbnail={arbol.properties.thumbnail}/>

                              
                          
                      </Popup>

                    </Marker>
                    
                      )
                    })}
                    
                  </MarkerClusterGroup> 
            </Map>

           
      
      </React.Fragment>

      
    )

    


  }
  
}

export default Mapa;