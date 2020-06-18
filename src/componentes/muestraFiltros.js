import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class MuestraFiltros extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            muestraModal: false
        }
    }

   componentDidUpdate = (p,s) => {

    let muestra = false
        
    if(p !== this.props){

        muestra = (this.props.resultados === 0 ? true : false)

        this.setState({muestraModal: muestra})

    }

   }

   onHide = () => {

        this.setState({muestraModal: false})

   }

   
    render(){

        return(

        <React.Fragment>

            <Modal show={this.state.muestraModal}  backdrop={true} centered onHide={this.onHide}> 
                    
                    <Modal.Header>
                        <Modal.Title>Lo sentimos</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <center>Su búsqueda no trajo resultados<br />Redefina los términos de los filtros</center>
                    </Modal.Body>

                
            </Modal>

            
             {this.props.resultados} individuos {this.props.follaje !== "" ? "Follaje: " + this.props.follaje : ""} {this.props.tipo !== "" ? "Tipo: " + this.props.tipo : ""} {this.props.nombrecientifico !== "" ? this.props.nombrecientifico : ""} {this.props.nombrevulgar !== "" ? this.props.nombrevulgar : ""} encontrados en {(this.props.localidad === "" || this.props.localidad === undefined) ? "Todas" : this.props.localidad }
        

        </React.Fragment>

        )

    }


}

export default MuestraFiltros