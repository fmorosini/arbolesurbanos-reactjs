import React from 'react'

class AutoCompletarNombreCientifico extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            sugerenciasNombreCientifico: [{
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
           
  
                sugerenciaNombreCientifico: "",
                nombreCientificoTipeado: "",
                seleccionoSugerenciaNombreCientifico: false

           
        }

    }

    componentDidUpdate = (prevProps,prevState) => {

        if(prevState !== this.state)
        {

            if(this.state.seleccionoSugerenciaNombreCientifico)
            {
                this.props.onSelectNombreCientifico(this.state.sugerenciaNombreCientifico)
            }
            else
            {
                this.props.onSelectNombreCientifico(this.state.nombreCientificoTipeado)
            }

        }
        

    }

    
    buscaMatches = (e) => {

        const especies = this.props.especies.features

        const texto = e.target.value

        this.setState((state) => (state.nombreCientificoTipeado = texto))
        this.setState((state) => (state.seleccionoSugerenciaNombreCientifico = false))

        let sugerencias = []

        if(texto !== "")
        {
             sugerencias = especies.filter((especie,indice) => {

                if(especie.properties.nombrecientifico.toUpperCase().substring(0, texto.length) === texto.toUpperCase())
                {
                return especie
                }

            })
        }

        this.setState((state) => (state.sugerenciasNombreCientifico = sugerencias))

    }

    clickSugerenciaNombreCientifico = (e) => {

      const valor = e.target.innerText

      this.setState((state) => (state.sugerenciaNombreCientifico = valor))
      this.setState((state) => (state.seleccionoSugerenciaNombreCientifico = true))

    }

    

    

    
  

    render(){
       
        const claseUl = "mandararriba"

        return(
                
                <React.Fragment>

                        <div className="card">
                            <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Nombre científico:
                                </button>
                            </h5>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">                                                                      
                                <input type="text" id="nombrcientifico" className="anchoTotal" onChange={this.buscaMatches} value={this.state.seleccionoSugerenciaNombreCientifico ? this.state.sugerenciaNombreCientifico : this.state.nombreCientificoTipeado}/>  
                                <div id="nombrecientifico" className={"form-group" + (( this.state.sugerenciasNombreCientifico.length === 0 || this.state.sugerenciasNombreCientifico[0].properties.nombrecientifico === "") ? " ocultar" : " mostrar")}>
                                <ul className={claseUl + (this.state.seleccionoSugerenciaNombreCientifico ? " ocultar" : "")} id="ulnombrecientifico" value="">
                                    
                                    {this.state.sugerenciasNombreCientifico.map((sugerencia,key) => {

                                        return <li key={key} value={sugerencia.properties.nombrecientifico} onClick={this.clickSugerenciaNombreCientifico}>{sugerencia.properties.nombrecientifico}</li>

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

export default AutoCompletarNombreCientifico