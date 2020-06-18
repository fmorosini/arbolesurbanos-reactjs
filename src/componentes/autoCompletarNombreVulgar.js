import React from 'react'

class AutoCompletarNombreVulgar extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            sugerenciasNombreVulgar: [{
                properties: {
                follaje: "",
                id: 0,
                imagen: "",
                magnitud: 0,
                nombrecientifico: "",
                nomrevulgar: "",
                thumbnail: "",
                tipo: "",
                url_ficha: ""}}],  
           
  
                sugerenciaNombreVulgar: "",
                nombreVulgarTipeado: "",
                seleccionoSugerenciaNombreVulgar: false

           
        }

    }

    componentDidUpdate = (prevProps,prevState) => {

        
        if(prevState != this.state)
        {
        
            if(this.state.seleccionoSugerenciaNombreVulgar)
            {
                this.props.onSelectNombreVulgar(this.state.sugerenciaNombreVulgar)
            }
            else
            {
                this.props.onSelectNombreVulgar(this.state.nombreVulgarTipeado)
            }

        }
        

    }

    
    buscaMatches = (e) => {

        const especies = this.props.especies.features

        const texto = e.target.value

        this.setState((state) => (state.nombreVulgarTipeado = texto))
        this.setState((state) => (state.seleccionoSugerenciaNombreVulgar = false))

        let sugerencias = []

        if(texto !== "")
        {
             sugerencias = especies.filter((especie,indice) => {

                if(especie.properties.nombrevulgar.toUpperCase().substring(0, texto.length) === texto.toUpperCase())
                {
                return especie
                }

            })
        }

        this.setState((state) => (state.sugerenciasNombreVulgar = sugerencias))

    }

    clickSugerenciaNombreVulgar = (e) => {

      const valor = e.target.innerText

      this.setState((state) => (state.sugerenciaNombreVulgar = valor))
      this.setState((state) => (state.seleccionoSugerenciaNombreVulgar = true))

    }

    

    

    
  

    render(){
       
        const claseUl = "mandararriba"

        return(
                
                <React.Fragment>

                    
                        <div className="card">
                            <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Nombre vulgar:
                                </button>
                            </h5>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                <div className="card-body">                                                                      
                                <input type="text" id="nombrevulgar" className="anchoTotal" onChange={this.buscaMatches} value={this.state.seleccionoSugerenciaNombreVulgar ? this.state.sugerenciaNombreVulgar : this.state.nombreVulgarTipeado}/>
                    
                                    <div id="divnombrevulgar" className={"form-group" + (( this.state.sugerenciasNombreVulgar.length === 0 || this.state.sugerenciasNombreVulgar[0].properties.nombrevulgar === "") ? " ocultar" : " mostrar")}>
                                    <ul className={claseUl + (this.state.seleccionoSugerenciaNombreVulgar ? " ocultar" : "")} id="ulnombrevulgar" value="">
                                        
                                        {this.state.sugerenciasNombreVulgar.map((sugerencia,key) => {

                                            return <li key={key} value={sugerencia.properties.nombrevulgar} onClick={this.clickSugerenciaNombreVulgar}>{sugerencia.properties.nombrevulgar}</li>

                                        })}

                                    </ul>
                                    </div>   

                                </div>
                            </div>
                        </div>                  
                    
                    
                  

                </React.Fragment>
        )

    }


}

export default AutoCompletarNombreVulgar