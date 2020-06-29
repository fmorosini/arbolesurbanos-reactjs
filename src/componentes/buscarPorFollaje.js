import React from 'react'

class BuscarPorFollaje extends React.Component{

    constructor(props){

        super(props)

        this.state = {
            follaje: ""
            }

    }

    handleOnClick = (e) => {        

       let valor = e.target.innerText

       this.setState({follaje: (valor === "Todas" ? "" : valor)})

       this.props.handleOnChangeFollaje((valor === "Todas" ? "" : valor))

    }

    

    render()
    {
        let claseElementoLista = "dropdown-item"
        
        return(

            <React.Fragment>

                    <div className="card">
                            <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Follaje
                                </button>
                            </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">                                                                      
                                    <div className="dropdown">
                                    <button type="button" className="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown">{this.state.follaje === "" ? "Follaje" : this.state.follaje}</button>
                                        <div className="dropdown-menu">               
                                            <a className={claseElementoLista + (this.state.follaje === "Caduco" ? " active" : "")} onClick={this.handleOnClick} id="Caduco">Caduco</a>
                                            <a className={claseElementoLista + (this.state.follaje === "Perenne" ? " active" : "")} onClick={this.handleOnClick} id="Perenne">Perenne</a>
                                            <a className={claseElementoLista + (this.state.follaje === "" ? " active" : "")} onClick={this.handleOnClick} id="Todas">Todas</a>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>

            </React.Fragment>

        )
    }

}

export default BuscarPorFollaje