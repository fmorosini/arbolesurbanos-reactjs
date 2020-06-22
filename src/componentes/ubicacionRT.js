import React from 'react'
import {Marker} from 'react-leaflet'
import L from 'leaflet'
import IconoUbicacion from '../recursos/ubicacion.png'

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
        console.log(this.state.GeolocationCoordinates)
    }

    componentDidMount = () => {

        window.setInterval(this.obtenerCoordenadasGPS,5000)

    }

    
    
    render(){

        const propiedadesIcono = {iconUrl: {IconoUbicacion}}
        const icono = new L.Icon(propiedadesIcono)

        return <Marker position={[this.state.GeolocationCoordinates.latitude, this.state.GeolocationCoordinates.longitude]} icon={icono} />

    }


}

export default UbicacionRT