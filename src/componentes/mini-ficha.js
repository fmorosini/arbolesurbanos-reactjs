import React from 'react'

class Minificha extends React.Component{

       
    render(){
    
    
        let  urlthumbnail = "https://www.arbolesurbanos.com.ar/" + this.props.thumbnail


        return(    
        
            

            <React.Fragment>

            

                <div className="minificha">
                        
                        <div><center><a href={this.props.urlficha} target="_top"><img className="img-fluid" src= {urlthumbnail} alt={this.props.nombrecientifico}></img></a></center></div><hr />
                            <div>
                                <div><strong>{this.props.nombrevulgar}</strong></div>
                                <div>
                                    <div><strong>Nombre científico: </strong>{this.props.nombrecientifico}</div>
                                    <div><strong>Tipo: </strong>{this.props.tipo}</div>
                                    <div><strong>Follaje: </strong>{this.props.follaje}</div>
                                    <div><strong>Magnitud: </strong>{this.props.magnitud.toString()}</div>
                                </div>                         
                            </div>
                        <div><strong>Click en la imagen para ver ficha</strong></div>
                        </div>

            </React.Fragment>

        )
    }
}

export default Minificha