import React from "react";


class PageTager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activate: ''};

  }
  componentDidMount(){
    if(typeof window !== undefined){
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount(){
    if(typeof window !== undefined){  window.removeEventListener('scroll', this.handleScroll); }
  }   
  handleScroll = () => {
    let position = window.scrollY;
    let height = window.innerHeight;

    let eyeheight = window.innerHeight / 2;
    let eyesight = position + eyeheight; //EYE CENTER

    if(eyesight > 0 && eyesight < height){
      this.setState({activate: '1'});
    }else if(eyesight > height && eyesight < height*2){
      this.setState({activate: '2'});
    }else if(eyesight > height*2 && eyesight < height*3){
      this.setState({activate: '3'});
    }else if(eyesight > height*3 && eyesight < height*4){
      this.setState({activate: '3'});
    }else if(eyesight > height*4 && eyesight < height*5){
      this.setState({activate: '4'});
    }

  }
  
  render () {
    return (
        <div className = "navigation">
            <span className={this.state.activate === '1' ? 'active' : null}>01</span>

            <span></span>

            <span className={this.state.activate == 2 ? 'active' : null}>02</span>

            <span ></span>

            <span className={this.state.activate == 3 ? 'active' : null}>03</span>

            <span></span>

            <span className={this.state.activate == 4 ? 'active' : null}>04</span>
        </div>
    )
  }
}

export default PageTager


