import React from 'react'

class LlevaCuentaPopUps extends React.Component{

    componentDidMount = () => {
       
       if(this.props.cantidad !== 1)
       { 
        if(this.props.numero === this.props.cantidad)
            {
                this.props.termino()
            }
     }   

    }
    
    render()
    {
        return(null)
    }

}

export default LlevaCuentaPopUps