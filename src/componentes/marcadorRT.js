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


    obtenerCoordenadasGPS = (posicion) => {

        let coordenadas = posicion.coords

        this.setState((state) => (state.GeolocationCoordinates = coordenadas))          

    }

    errorWatch = (error) => {

        alert("Error al obtener ubicación")

        navigator.geolocation.clearWatch(this.state.idWatchPosition)

    }

    componentDidUpdate = (p,s) => {

        let id = 0
        
        if(p !== this.props){

            if(this.props.activo){

                if(navigator.geolocation){
    
                    id = navigator.geolocation.watchPosition(this.obtenerCoordenadasGPS,this.errorWatch,{enableHighAccuracy: true, maximumAge: 0, timeout: 10000})

                    this.setState((state) => (state.idWatchPosition = id))
    
                }
    
            }
            else{
    
                if(this.state.idWatchPosition !== 0){
    
                    navigator.geolocation.clearWatch(this.state.idWatchPosition)
    
                }
    
            }

        }


    }



      
    render(){

        const posicion = this.state.GeolocationCoordinates

        const urlIconoSeguimiento = "https://www.arbolesurbanos.com.ar/iconos/ubicacion.png"
        const propiedadesIconoSeguimiento = {iconUrl: urlIconoSeguimiento, iconAnchor:[22,21]}
        const iconoSeguimiento = new L.Icon(propiedadesIconoSeguimiento)

        if(posicion.latitude !== 0 && posicion.longitude !== 0 && this.props.activo){

            return(

                <Marker icon={iconoSeguimiento} position={[posicion.latitude,posicion.longitude]}/>

            )
        }
        else{

            return null

        }

    }

}

export default MarcadorRT