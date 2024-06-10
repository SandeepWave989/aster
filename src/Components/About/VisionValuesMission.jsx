import { Col, Row } from "react-bootstrap";
import styles from "./About.module.css";
import ValueCard from "./ValueCard";
import vision1 from "../../Img/vision-1.png"
import vision2 from "../../Img/vision-2.png"

const VisionValuesMission = () => {

    
  return (

    <>
    <div className="container">
 <div className="row">
   <div className="col-lg-11 mx-auto text-justify mb-5 pb-4">
   <h3 className={`${styles.titleBorder} ${styles.secTitle}`}>
   Vision Values Mission
   </h3>
   <div className="vision">
   <div className={`${styles.contTitle}`}>VISION</div>
   <p className={` ${styles.para}`}>
   “A Caring Mission with a Global Vision”
   </p>
   </div>
   <div className="values">
   <div className={`${styles.contTitle}`}>Values</div>
   <Row>
        <Col>
        <ValueCard  cardimg={vision1}  />
        </Col>
        <Col>
        <ValueCard cardimg={vision2}/>
        </Col>
      </Row>
   </div>

  
   </div>
 </div>
</div>
</>
  )
}

export default VisionValuesMission