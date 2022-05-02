import './styles.css'
function Navigation(){
    return(
<header>
      <div>
        <span id="logo"><b>EDYODA</b></span>
        <span id="explore-categories"> Explore Categories</span>
        <img id="dropdown" src={process.env.PUBLIC_URL+"drop-icon.png"} alt="dropdown"></img>
        <span id="learning">EdYoda is free learning and knowledge</span>
        <span id="learning2">sharing platform for techies</span>
        <p id="logo-stories">Stories</p>
        <button id="button-header"><b>Go To Main Website</b></button>
      </div>
     
    </header>
    );
}

export default Navigation;
