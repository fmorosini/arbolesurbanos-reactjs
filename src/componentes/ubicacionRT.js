import React from 'react'
import GPS from '../recursos/ubicacion.png'


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
           },

           seguimiento: false,
           idWatchPosition: 0
        }

    }

    obtenerCoordenadasGPS = (posicion) => {
        
        
        if(this.state.GeolocationCoordinates.longitude !== 0 && this.state.GeolocationCoordinates.latitude !== 0){
        
            this.props.pasaUbicacion(this.state.GeolocationCoordinates, true)
        }
        else{

            this.setState((state) => (state.seguimiento = false))

        }
    }

    activaSeguimiento = () => {

        if(navigator.geolocation){

            if(!this.state.seguimiento){

                this.setState((state) => (state.idWatchPosition = navigator.geolocation.watchPosition((posicion) => this.obtenerCoordenadasGPS(posicion))))
                
                if(this.state.GeolocationCoordinates.longitude !== 0 && this.state.GeolocationCoordinates.latitude !== 0){

                    this.setState((state) => (state.seguimiento = true))

                }
                else{

                    this.setState((state) => (state.seguimiento = false))

                }

            }
            else{

                this.setState((state) => (state.seguimiento = false))
                navigator.geolocation.clearWatch(this.state.idWatchPosition)

            }

        }

    }

    
    
    render(){

       let className = (this.state.seguimiento ? "btn btn-outline-primary active" : "btn btn-outline-secondary")

        return(

            <a id="btnGPS"  className={className} onClick={this.activaSeguimiento}><img src={GPS} className={"icono"} alt=""/></a> 

        )

    }


}

export default UbicacionRT