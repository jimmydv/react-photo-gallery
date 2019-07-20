import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import SearchFrom from './components/SearchForm';
import Nav from './components/Nav';
import apiKey from './Config';
import axios from 'axios';
import Gallery from './components/Gallery';
import Notfound from './components/Notfound';



class App extends React.Component{

 state = {
      tagName:"wild"
  };


handleTagValue=(imagetag) =>{
  const tagName = imagetag
  this.setState({tagName:tagName})
  }


// fetch the Data 
  componentDidMount(){
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.tagName}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo
        });
      })
      .catch(function (error) {
        console.log('Error Fetching and Parsing api data', error);
      });
}

// return data if there was change , like when searching for new images
componentDidUpdate(){
  
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.tagName}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      
      this.setState({
        images: response.data.photos.photo
      });
    })
    .catch(function (error) {
      console.log('Error Fetching and Parsing api data', error);
    });
}


  render(){
   
    // I will use Redicrect to make sure all path renders the Gallery also if the path doesn't exist renders an error 404... I need to find a way to capture the urls params username that I will create and pass it to the tagname on
    return(
      <Router>
        <div className="container">
          <Route path="/" render={()=> <SearchFrom data={this.state.images} tagValueHandler={this.handleTagValue} />} />
          
          <Nav tagValueHandler={this.handleTagValue} />
          <Switch>
            <Route path="/(|wild|sunrise|waterfall|search)" exact render={ () => <Gallery data={this.state.images} />}/> 
            <Route component={Notfound} /> {/* Display error page when a URL path does not match an existing route. */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;