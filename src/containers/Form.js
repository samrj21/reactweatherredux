import React , { Component } from 'react'
import {connect} from 'react-redux'
import '../App.css'
import Buttons from "../components/Buttons"
import Inputs from "../components/Input"
import myActions from '../actions'
import Display from '../components/Display'


class Form extends Component {
    
    constructor(props){
        super(props) 
        this.state ={
            Lon :null,
            lat :null
        }

       
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const {onSubmit}=this.props

        let latitude = this.state.lat
        let longitude= this.state.lon

        onSubmit(latitude,longitude)  


    }


 handleClicklat =(e)=>{
        this.setState({lat : e.target.value}) 
        }


  handleClicklon =(e)=>{
    this.setState({ lon : e.target.value})
           }

    render()
    {  
        
        return(    
        
    
             <div className="wrapper"> 
            <div className="main"> 
            <div className="container"> 
         <form onSubmit={this.handleSubmit}>
                  
        <Inputs    latitude={this.props.lat} longitude={this.props.lon} handleLatitude={this.handleClicklat} handlelongitude={this.handleClicklon} />
        <Buttons   btnAction ={this.props.btnAction}  />

     <div>
      <Display data={this.props.data}/>
     </div>
      </form>
        </div> 
        </div> 
        </div> 
   
      
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        lati: state.form.lat,
        longi: state.form.lon,
        data: state.weather
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onSubmit : (lat,lon) => {
            dispatch(myActions.getWeather(lat,lon))
        }
         
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Form);
 


