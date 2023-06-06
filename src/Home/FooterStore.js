import Facebook from '../Assets/facebook.png'
import Youtube from'../Assets/youtube.png'
import Spotify from '../Assets/Spotify Logo.png'
import classes from './FooterStore.module.css'
const FooterStore = () => {
  return (
    <div  className={classes.footer1}>
     <footer>
      <h1 className={classes.h1}>The Genrics</h1>
       <span   className={classes.img} >
      <a  href="https://www.youtube.com/"><img  
      src={Youtube} 
      alt="youtube" 
      width="50px" 
      height="50px" 

     /></a>
      <a href="https://open.spotify.com/"> <img 
      src={Spotify } 
      alt="youtube" 
      width="50px" 
      height="50px"  /></a>
     <a href="https://www.facebook.com/" ><img 
      src={Facebook} 
      alt="youtube" 
      width="50px" 
      height="50px"  /></a> </span>
    </footer>
  </div>

);
};
export default FooterStore;