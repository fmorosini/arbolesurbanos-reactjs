import React from 'react'
import GPS from '../recursos/gps.png'

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
    }

    componentDidUpdate = (p,s) => {        
        
        if(s !== this.state)
        {
            console.log(s.GeolocationCoordinates)
        }

    }

    iniciaSeguimientoLocalizacion = () => {

        window.setInterval(this.obtenerCoordenadasGPS,5000)

    }

    
    
    render(){

        return(

            <a id="btnGPS"  className="btn btn-outline-primary" onClick={this.iniciaSeguimientoLocalizacion}><img src={GPS} className={"icono"} alt=""/></a> 

        )

    }


}

export default UbicacionRT