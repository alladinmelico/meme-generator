import React from 'react'
import {TextField, Button} from '@material-ui/core'
import { array } from 'yup'

class Caption extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            boxes: this.props.meme.box_count,
            text1: '',
            text2: '',
            text3: '',
            text4: '',
            text5: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render(){
        return(
            <form onSubmit={this.props.requestMeme}>
                <TextField name='text1' label="Text 1" type="text" value={this.state.text1} onChange={this.handleInputChange}/>
                <TextField name='text2' label="Text 2" type="text" value={this.state.text2} onChange={this.handleInputChange}/>
                <TextField name='text3' label="Text 3" type="text" value={this.state.text3} onChange={this.handleInputChange}/>
                <TextField name='text4' label="Text 4" type="text" value={this.state.text4} onChange={this.handleInputChange}/>
                <TextField name='text5' label="Text 5" type="text" value={this.state.text5} onChange={this.handleInputChange}/>
                <Button type='submit' variant="contained" color='primary' >Lezz go!</Button>
            </form>
        )        
    }

}

export default Caption