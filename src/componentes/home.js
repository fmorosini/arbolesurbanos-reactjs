import React from 'react'
import Casita from '../recursos/home.png'

class Home extends React.Component{

   render(){

        return <a id="btnHome"  className="btn btn-outline-primary" onClick={this.props.irHome}><img src={Casita} className={"icono"} alt=""/></a>

   }


}

export default Home