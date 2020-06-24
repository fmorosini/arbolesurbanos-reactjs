import React from 'react'
import L from 'leaflet'
import {Marker} from 'react-leaflet'

class MarcadorRT extends React.Component{

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
           },
           idWatchPosition: 0
        }

    }

    componentDidMount = () => {

        if(this.props.activo){

            if(navigator.geolocation){

                this.setState((state) => (state.idWatchPosition = navigator.geolocation.watchPosition((posicion) => this.obtenerCoordenadasGPS(posicion))))

            }

        }
        else{

            if(navigator.geolocation){

                navigator.geolocation.clearWatch(this.state.idWatchPosition)

            }

        }

    }

      
    render(){

        const posicion = this.state.GeolocationCoordinates

        const urlIconoSeguimiento = "https://www.arbolesurbanos.com.ar/iconos/ubicacion.png"
        const propiedadesIconoSeguimiento = {iconUrl: urlIconoSeguimiento, iconAnchor:[22,21]}
        const iconoSeguimiento = new L.Icon(propiedadesIconoSeguimiento)

        if(posicion.latitude !== 0 && posicion.longitude !== 0){

            return(

                <Marker icon={iconoSeguimiento} position={posicion} />

            )
        }
        else{

            return null

        }

    }

}

export default MarcadorRT