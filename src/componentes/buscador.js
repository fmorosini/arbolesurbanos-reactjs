import React from 'react'
import BuscarPorTipo from './buscarPorTipo.js'
import BuscarPorFollaje from './buscarPorFollaje.js'
import SelectorLocalidades from './selectorLocalidades.js'
import AutoCompletarNombreCientifico from './autoCompletarNombreCientifico.js'
import AutoCompletarNombreVulgar from './autoCompletarNombreVulgar.js'
import Lupa from '../recursos/lupa.png'

class Buscador extends React.Component{      
   
    constructor(props){
        
    super(props)

        this.state = {    
            filtro : {
                tipo: "",
                follaje: "",
                nombrecientifico: "",
                nombrevulgar: ""},
            botonBuscarClickeado: false,
            filtroAplicado: false
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

    handleClickMas = () => {

        if(this.state.botonBuscarClickeado)
        {
            this.setState({botonBuscarClickeado: false})
        }
        else{
            this.setState({botonBuscarClickeado: true})
        }

    }

   
 
   


        
    render(){
        return(
            <React.Fragment>
            
                
                    <div className="col-md-4">

                    
                         
                           

                        
                    </div>    
                        
                   

                    <div className="col-md-4">


                        <SelectorLocalidades localidades={this.props.localidades} handleOnClick={this.handleClickLocalidad} />                        
                    
                   

                        <a id="btnBuscar" onClick={this.subeEstado} className="btn btn-outline-primary"><img src={Lupa} className="icono" alt=""/></a>

                        <button className="btn btn-outline-primary" data-toggle="collapse" data-target="#buscador" onClick={this.handleClickMas}>
                            {this.state.botonBuscarClickeado ? "-" : "+"}
                        </button> 
                    

                    </div> 

                    <div className="col-md-4"></div>

                    <div className="col-md-12">
                
                    <div id="accordion" className="anchoTotal">
                        <div id="buscador" className="collapse">
                            
                            <AutoCompletarNombreCientifico especies={this.props.especies} onSelectNombreCientifico={this.handleOnChangeNombreCientifico} />
                            <AutoCompletarNombreVulgar especies={this.props.especies} onSelectNombreVulgar={this.handleOnChangeNombreVulgar} />
                            <BuscarPorFollaje  handleOnChangeFollaje={this.handleOnChangeFollaje} />
                            <BuscarPorTipo  handleOnChangeTipo={this.handleOnChangeTipo} />

                        </div>


                    </div>


                </div>
                


            </React.Fragment>
        )
    }

}

export default Buscador