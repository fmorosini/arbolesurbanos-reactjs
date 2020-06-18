import React from 'react'

function Minificha(props){


    let  urlthumbnail = "https://www.arbolesurbanos.com.ar/" + props.thumbnail


    return(    
    
        

        <React.Fragment>

           

            <div className="minificha">
                    
                    <div><center><a href={props.urlficha} target="_top"><img className="img-fluid" src= {urlthumbnail} alt={props.nombrecientifico}></img></a></center></div><hr />
                        <div>
                            <div><strong>{props.nombrevulgar}</strong></div>
                            <div>
                                <div><strong>Nombre científico: </strong>{props.nombrecientifico}</div>
                                <div><strong>Tipo: </strong>{props.tipo}</div>
                                <div><strong>Follaje: </strong>{props.follaje}</div>
                                <div><strong>Magnitud: </strong>{props.magnitud.toString()}</div>
                            </div>                         
                        </div>
                    <div><strong>Click en la imagen para ver ficha</strong></div>
                    </div>

        </React.Fragment>

    )
}

export default Minificha