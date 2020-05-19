import React from 'react';
import logo from './logo.svg';
import './App.css';
import Caption from './components/Caption'
import Gallery from './components/Gallery'
import SelectedImage from './components/SelectedImage';
import qs from 'qs'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      memes: {},
      template_id:'',
      selected_meme: {},
      boxes: [],
      memeURL: ''
    }
    this.requestMeme = this.requestMeme.bind(this)
    this.imageSelection = this.imageSelection.bind(this)
  }

  componentDidMount(){
    fetch('https://api.imgflip.com/get_memes')
      .then(respond => respond.json())
      .then(data => this.setState({memes: data.data.memes}))

  }

  requestMeme(event){
    event.preventDefault()
    const data = new FormData(event.target)
    const content = new FormData()

    let account = 'alladin'
    let password = '.dVaKiz3-L?H$q*'
    let template_id = this.state.template_id
    let boxes = [{'text':data.get('text1')},
    {'text':data.get('text2')},{'text':data.get('text3')},
    {'text':data.get('text4')},{'text':data.get('text5')}]
   
    
    fetch('https://api.imgflip.com/caption_image',{method:'POST',headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
      body: qs.stringify({
        'template_id':template_id,
        'username':account,
        'password':password,
        'boxes':boxes
      })})
      .then(respond => respond.json())
      .then(data => this.setState({memeURL: data.data.url}))
      //this.setState({memeURL: data.data.url})
      //&text0=${data.get('text1')}&text1=${data.get('text2')}
  }

  imageSelection(id){
    this.setState({template_id: id})
    this.setState({selected_meme: Object.values(this.state.memes).find(meme => Number(meme.id) == Number(id))})
    this.setState({memeURL: ''})
    window.scrollTo(0, 0);
  }

  render(){
    // this.setState(prevState => {
    //   let temp = Array(prevState.memes)
    //   const twoParamMeme = temp.filter(meme => console.log(meme.name))
    // })
    return (
      <div className="App">
        <Caption meme = {this.state.selected_meme} requestMeme={this.requestMeme}/>
        <SelectedImage meme={this.state.selected_meme} url={this.state.memeURL}/>
        <Gallery data={this.state.memes} clickHandler={this.imageSelection}/>
      </div>
    )
  }
}

export default App;
