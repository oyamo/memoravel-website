import './Hero.css'
import Typography from "@mui/material/Typography";
import heroBGImage from '../../../assets/images/hero-image.jpg'

export const Hero = () =>{
    return (
        <div className="hero-section" style={{backgroundImage: `url(${heroBGImage})`}}>
            <div className="hero-content-wrap">
                <div className="hero-content-text">
                    <Typography color='#a0c1d1'>
                        MEMORAVEL TRAVEL
                    </Typography>
                    <Typography color='white' variant="h2" >
                        Discover the magic around the world with us.
                    </Typography>
                    <p>
                        We offer simple-extraordinary customer service and company growth as we serve our
                        customer’s needs in travel, tour and related services
                    </p>
                </div>
            </div>
        </div>
    )
}