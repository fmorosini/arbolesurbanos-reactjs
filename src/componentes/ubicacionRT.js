import React from 'react'
import {Marker} from 'react-leaflet'
import L from 'leaflet'

class UbicacionRT extends React.Component{

    constructor(props)
    {
        super(props)

        this.state = {
           
           GeolocationCoordinates: {
            accuracy: 0,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude: 0,
            longitude: 0,
            speed: null       
           }
        }

    }

    obtenerCoordenadasGPS = () => {

        navigator.geolocation.getCurrentPosition((posicion) => (this.setState((state) => (state.GeolocationCoordinates = posicion.coords))))  
        
        if(this.state.GeolocationCoordinates.longitude !== 0 && this.state.GeolocationCoordinates.latitude !== 0){
        
            this.props.pasaUbicacion(this.state.GeolocationCoordinates)

        }
    }

    componentDidMount = () => {

        if(navigator.geolocation){

            window.setInterval(this.obtenerCoordenadasGPS,5000)

        }

    }

    
    
    render(){

        const propiedadesIcono = {iconUrl: "https://www.arbolesurbanos.com.ar/iconos/ubicacion.png"}
        const icono = new L.Icon(propiedadesIcono)

        if(this.state.GeolocationCoordinates.longitude !== 0 && this.state.GeolocationCoordinates.latitude !== 0){

            return <Marker position={[this.state.GeolocationCoordinates.latitude, this.state.GeolocationCoordinates.longitude]} icon={icono} />
        }
        else{

            return false

        }

    }


}

export default UbicacionRT