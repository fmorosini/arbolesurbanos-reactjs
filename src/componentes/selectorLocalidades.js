import React from 'react'

class SelectorLocalidades extends React.Component {

    constructor(props)
    {
        super(props)

        this.state = {
            localidad: ""
        }
    }
    
    
    handleOnClick = (e) => {

        const localidad = e.target.innerText

        this.setState((state) => (state.localidad =  (localidad === "Todas" ? "" : localidad)))

        this.props.handleOnClick(localidad === "Todas" ? "" : localidad)
    }

    

    render(){

        let claseElementoLista = "dropdown-item"

        return(

           
                       
            <React.Fragment>
                
                <span className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">{this.state.localidad === "" ? "Localidades" : this.state.localidad}</button>
                        <div className="dropdown-menu mandararriba">
               
                            {this.props.localidades.features.map((localidad,key) => {
                            
                            return(

                                <a className={claseElementoLista + (this.state.localidad === localidad.properties.nombre ? " active" : "")} onClick={this.handleOnClick} key={key}>{localidad.properties.nombre}</a>

                                )

                            })}

                                <a className={claseElementoLista + (this.state.localidad === "" ? " active" : "")} onClick={this.handleOnClick}>Todas</a>

                    </div>
                </span> 

            </React.Fragment>

        )

    }

}

export default SelectorLocalidades