import React, { Component } from 'react'

export default class Memegen extends Component {
    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }
  
    handleInput =(e) =>{
         const {name,value}=e.target;
         this.setState({
              [name]: value
         })
    }
    
    submitInput =(e)=>{
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitInput} className="mb-3">
                  <div class="form-row ">
                     <div class="form-group col-md-6 mb-6">
                         <h3 style={{color: "white"}}>Top Text</h3>
                         <input name="topText" type="text" class="form-control"  value={this.topText}  onChange={this.handleInput}/>
                     </div>
                      <div class="form-group col-md-6">
                          <h3 style={{color: "white"}}>Bottom Text</h3>
                         <input name="bottomText" type="text" class="form-control" value={this.bottomText} onChange={this.handleInput}/>
              </div>
              </div>
              <button className=" btn btn-warning mb-3 btn-block">Generate</button>     
         </form>
          <div className="meme mt-6">
              <img src={this.state.randomImg} alt=""/>
               <h2 className="top">{this.state.topText}</h2>
               <h2 className="bottom">{this.state.bottomText}</h2>
               
          </div>
            </div>
        )
    }
}
