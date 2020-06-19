import React from 'react'
import Mapa from './Mapa.js'
import Buscador from './buscador.js'
import MuestraFiltros from './muestraFiltros.js'

class Jom extends React.Component{
  
  constructor(props){    
       
    super(props)
      
    this.state = {    
        filtro : {
          tipo: "",
          follaje: "",
          nombrecientifico: "",
          nombrevulgar: "",        
         localidad: ""},

         muestraModal: false,
         html: ""

         
      }

      
        

    }  

             
    handleOnChange = (e) => {
      
      this.setState((state) => (state.filtro = e))      

      
    }   

    revertir = (arreglo2D) => {

      const uno = arreglo2D[0]
      const dos = arreglo2D[1]
  
      return [dos,uno]
    
    }
  

    
  render(){ 
    
    const filtro = this.state.filtro 

    let arrayDatos = this.props.geoDatos.features
    let dataFiltrada = this.props.geoDatos.features

   
    if(filtro.nombrecientifico !== undefined && filtro.nombrecientifico !== "")
    {

      dataFiltrada = dataFiltrada.filter((dato,indice) => {    
    
      if(dato.properties.nombrecientifico.toUpperCase().indexOf(filtro.nombrecientifico.toUpperCase()) !== -1)
      {
        return dato
      }})

     
      

    }

    if(filtro.nombrevulgar !== undefined && filtro.nombevulgar !== "")
    {

      dataFiltrada = dataFiltrada.filter((dato,indice) => {    
    
      if(dato.properties.nombrevulgar.toUpperCase().indexOf(filtro.nombrevulgar.toUpperCase()) !== -1)
      {
        return dato
      }})

    }

    if(filtro.follaje !== undefined && filtro.follaje !== "")
    {

      dataFiltrada = dataFiltrada.filter((dato,indice) => {    
    
      if(dato.properties.follaje.toUpperCase().indexOf(filtro.follaje.toUpperCase()) !== -1)
      {
        return dato
      }})

    }

    if(filtro.tipo !== undefined && filtro.tipo !== "")
    {

      dataFiltrada = dataFiltrada.filter((dato,indice) => {    
    
      if(dato.properties.tipo.toUpperCase().indexOf(filtro.tipo.toUpperCase()) !== -1)
      {
        return dato
      }})

    }

    if(filtro.localidad !== undefined &&  filtro.localidad !== "")
    {

      dataFiltrada = dataFiltrada.filter((dato,indice) => {    
    
      if(dato.properties.nombre.toUpperCase().indexOf(filtro.localidad.toUpperCase()) !== -1)
      {
        return dato
      }})     

    }

    /*

    Centro y Zoom para la localidad e búsqueda, pasado como prop a Mapa

    */

    let centro = [0,0]
    let zoom = 0

    let localidad_actual = this.props.localidades.features.filter((localidad,indice) => {

        if(localidad.properties.nombre === this.state.filtro.localidad)
        {
          return localidad
        }
        })  

    if(localidad_actual.length === 0)
    {
      centro = [-40.65, -71.3498]
      zoom =  7
      
    }
    else
    {   

      centro =  this.revertir(localidad_actual[0].geometry.coordinates)
      zoom =  localidad_actual[0].properties.zoom
       
    }

    let viewport = {center: centro, zoom: zoom}

     return (

            <React.Fragment>
              
             <div className="row">
                

                  <Buscador  localidades={this.props.localidades}
                  handleOnChange={this.handleOnChange} 
                  especies={this.props.especies} />  

                           

            </div>  

            <div className="row"> 
              <div className="col-md-4"></div>

              <div className="col-md-4">

                <MuestraFiltros localidad = {this.state.filtro.localidad}
                    tipo = {this.state.filtro.tipo}
                    follaje = {this.state.filtro.follaje}
                    nombrecientifico = {this.state.filtro.nombrecientifico}
                    nombrevulgar = {this.state.filtro.nombrevulgar}
                    resultados = {dataFiltrada.length} />
              </div>

            <div className="col-md-4"></div>



            </div>

            <div className="row">
              <div className="col-md-12">

                <Mapa datos={dataFiltrada.length === 0 ? arrayDatos : dataFiltrada} 
                localidades={this.props.localidades} 
                localidad={this.state.filtro.localidad}
                centro={centro}
                zoom = {zoom}
                viewport={viewport}/>     

              </div>
                                       
            </div>          

           

            </React.Fragment>
          )
    }
}

export default Jom