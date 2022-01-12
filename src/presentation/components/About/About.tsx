
import './About.css'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const About = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="grid-1-2 tools">
                    <div className="pattern-image-wrap">
                        <img
                            src="https://assets.website-files.com/611e0980838f625301db13a6/611f786f6da7ad43818f118a_Team.jpg"
                            loading="lazy"
                            width="512px"
                            srcSet="https://assets.website-files.com/611e0980838f625301db13a6/611f786f6da7ad43818f118a_Team-p-800.jpeg 800w, https://assets.website-files.com/611e0980838f625301db13a6/611f786f6da7ad43818f118a_Team-p-1080.jpeg 1080w, https://assets.website-files.com/611e0980838f625301db13a6/611f786f6da7ad43818f118a_Team-p-1600.jpeg 1600w, https://assets.website-files.com/611e0980838f625301db13a6/611f786f6da7ad43818f118a_Team.jpg 1800w"
                            alt="" className="pattern-image reveal"
                        />

                            <img
                        src="https://assets.website-files.com/611e0980838f625301db13a6/611f7a7c3cc8414c6f4f445d_Decoration%20Pattern%201%20Dark.svg"
                        loading="lazy" alt="" className="decoration-pattern top-right" />
                            <img
                        src="https://assets.website-files.com/611e0980838f625301db13a6/611f7a7c3cc8414c6f4f445d_Decoration%20Pattern%201%20Dark.svg"
                        loading="lazy" alt="" className="decoration-pattern bottom-left" />
                    </div>

                    <div id="w-node-a76298d6-a5cb-9574-6aee-5b8659f2b3e1-badb13a5">
                        <div className="section-title tight">
                            <Typography color={"#5a7d7c"} variant={"subtitle1"} >
                                WHO ARE WE?
                            </Typography>

                            <Typography variant={"h3"}>A&nbsp;bit
                                about us.</Typography>

                            <Typography variant={"body1"} className="text-section-subtitle text-primary reveal"
                                >We Deliver efficient and innovative solutions to optimize travel and events management
                                by leveraging our global reach with the best people and superior service.
                            </Typography>
                            <div className="align-left-button-wrap space-top reveal" style={{ marginTop: "12px"}}>
                                    <Button className="button-text" variant="text" style={{color: "#575445", paddingLeft: "0px"}}>Read more</Button>
                                    <img
                                        src="https://assets.website-files.com/611e0980838f625301db13a6/616d7fa2ac9ad04de35fe78e_Arrow%20Icon%20Primary.svg"
                                        loading="lazy" alt="" className="button-arrow-icon"
                                       />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}