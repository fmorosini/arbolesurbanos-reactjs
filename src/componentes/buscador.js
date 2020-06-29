import React from 'react'
import BuscarPorTipo from './buscarPorTipo.js'
import BuscarPorFollaje from './buscarPorFollaje.js'
import SelectorLocalidades from './selectorLocalidades.js'
import AutoCompletarNombreCientifico from './autoCompletarNombreCientifico.js'
import AutoCompletarNombreVulgar from './autoCompletarNombreVulgar.js'
import Lupa from '../recursos/lupa.png'
import Filtro from '../recursos/filtro.png'

class Buscador extends React.Component{      
   
    constructor(props){
        
    super(props)

        this.state = {    
            filtro : {
                tipo: "",
                follaje: "",
                nombrecientifico: "",
                nombrevulgar: ""}
            }
        }    

    subeEstado = () => {

        this.props.handleOnChange(this.state)

    }

    handleClickLocalidad = (e) => {

       this.setState((state) => (state.filtro.localidad = e))

    }

    handleOnChangeNombreCientifico = (valor) => {
      
        
        this.setState((state) => (state.filtro.nombrevulgar = ""))                      
        this.setState((state) => (state.filtro.nombrecientifico = valor))              

    }   

    handleOnChangeNombreVulgar = (valor) => {
      
        
        this.setState((state) => (state.filtro.nombrevulgar = valor))                      
        this.setState((state) => (state.filtro.nombrecientifico = ""))                      
 
     }   

    handleOnChangeTipo = (e) => {

        this.setState((state) => state.filtro.tipo = e)

    }   

    handleOnChangeFollaje = (e) => {

        this.setState((state) => state.filtro.follaje = e)

    }   

    
   
 
   


        
    render(){
        return(
            <React.Fragment>

                        <button className="btn btn-outline-dark" data-toggle="collapse" data-target="#buscador" >
                            <img src={Filtro} className="icono" alt="filtrar"></img>
                        </button> 
                    
                        <a id="btnBuscar" onClick={this.subeEstado} className="btn btn-outline-dark"><img src={Lupa} className="icono" alt=""/></a>
                
                        <div id="accordion" className="anchoTotal">
                            <div id="buscador" className="collapse">
                                
                                <SelectorLocalidades localidades={this.props.localidades} handleOnClick={this.handleClickLocalidad} />
                                <AutoCompletarNombreCientifico especies={this.props.especies} onSelectNombreCientifico={this.handleOnChangeNombreCientifico} />
                                <AutoCompletarNombreVulgar especies={this.props.especies} onSelectNombreVulgar={this.handleOnChangeNombreVulgar} />
                                <BuscarPorFollaje  handleOnChangeFollaje={this.handleOnChangeFollaje} />
                                <BuscarPorTipo  handleOnChangeTipo={this.handleOnChangeTipo} />

                            </div>
                            
                    </div>

            </React.Fragment>
        )
    }

}

export default Buscador