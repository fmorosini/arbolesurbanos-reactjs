import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Jom from './componentes/Jom.js'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import './App.css'
import PreCarga from './recursos/logo.png'

class App extends React.Component {
    
    traerGeoJson = async (capa) => {
        
        
        this.setState((state) => (state.cargando = true))
        
        
        let url = "https://mapa.arbolesurbanos.com.ar/geoserver/arbolado/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=arbolado:" + capa + "&outputFormat=application%2Fjson&srsName=EPSG:4326";
            let opciones = {
            method: 'GET',
            mode: 'cors'
        }
        
        const respuesta = await fetch(url, opciones)
        const datos = await respuesta.json()  
        
        
        return datos
    }

       
    
    componentDidMount = () => {
        

        this.traerGeoJson("arbolitos").then((geoDatos) => {this.setState({geoDatos: geoDatos})})

        this.traerGeoJson("especies").then((datos) => {this.setState({especies: datos})})

        this.traerGeoJson("localidades").then((datos) => {this.setState({localidades: datos})})

        

        

    }

    componentWillUnmount = () => {

            this.setState({})

    }

  

    constructor(props){
        
        super(props)

        this.state = {
            geoDatos:{
                totalFeatures: 0,
                features: [{
                geometry: {
                    coordinates: [0,0]
                },
                    properties: {
                        follaje: "",
                        tipo: "",
                        nombrevulgar: "",
                        nombrecientifico: "",
                        thumbnail: "",
                        magnitud: 0,
                        imagen: "",
                        nombre: ""
                    }
                }]
            },
            
                     
            especies: {
                features: [{
                    properties: {
                        follaje: "",
                        id: 0,
                        imagen: "",
                        magnitud: 0,
                        nombrecientifico: "",
                        nomrevulgar: "",
                        thumbnail: "",
                        tipo: "",
                        url_ficha: ""}
                }]
            },

            localidades: {
                features: [
                    {
                        geometry: {
                            coordinates: [0,0]
                        },
                        properties: {
                            ogc_fid: 0,
                            nombre: "",
                            zoom: 0
                        }
                    }
                ]
            },

            cargando: false
                        
            
         }

        
    }

    termino = () => {

        this.setState((state) => (state.cargando = false))

    }
 

    render() 
    {
         return(

            <React.Fragment>


                <Modal show={this.state.cargando} backdrop="static" size="lg" centered> 
                    
                    <Modal.Header>
                        <Modal.Title><center>Cargando datos</center></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <center><img src={PreCarga} alt=""></img></center>
                    </Modal.Body>

                
                </Modal>

                <div className='container-fluid'>
            
                    <Jom geoDatos={this.state.geoDatos} localidades={this.state.localidades} especies={this.state.especies} termino={this.termino}/>

                </div>

            </React.Fragment>
         )

        
    }

}

export default App