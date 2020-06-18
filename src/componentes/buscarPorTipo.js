import React from 'react'

class BuscarPorTipo extends React.Component{

    constructor(props){

        super(props)

        this.state = {
           tipo: ""
            }

    }

    handleOnClick = (e) => {        

        let valor = e.target.innerText
 
        this.setState({tipo: (valor === "Todas" ? "" : valor)})
 
        this.props.handleOnChangeTipo((valor === "Todas" ? "" : valor))
 
     }

       

    render()
    {

        let claseElementoLista = "dropdown-item"

        return(

            <React.Fragment>

<                       div className="card">
                            <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Tipo
                                </button>
                            </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">                                                                      
                                    <div className="dropdown">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">{this.state.tipo === "" ? "Tipo" : this.state.tipo}</button>
                                        <div className="dropdown-menu">               
                                            <a className={claseElementoLista + (this.state.tipo === "Latifoliada" ? " active" : "")} onClick={this.handleOnClick} id="Latifoliada">Latifoliada</a>
                                            <a className={claseElementoLista + (this.state.tipo === "Conífera" ? " active" : "")} onClick={this.handleOnClick} id="Conífera">Conífera</a>
                                            <a className={claseElementoLista + (this.state.tipo === "Monocotiledónea" ? " active" : "")} onClick={this.handleOnClick} id="Monocotiledónea">Monocotiledónea</a>
                                            <a className={claseElementoLista + (this.state.tipo === "" ? " active" : "")} onClick={this.handleOnClick} id="Todas">Todas</a>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>


            </React.Fragment>

        )
    }

}

export default BuscarPorTipo