import Card from 'react-bootstrap/Card';

const ValueCard = ({cardimg}) => {
  return (
    <>
         <Card style={{  }}>
      <Card.Img variant="top" className="" src={cardimg}  style={{maxWidth:"150px"}}/>
      <Card.Body>
        <Card.Title>
        Excellence
         </Card.Title>
        <Card.Text>
        Surpassing current Benchmarks constantly by continually challenging our ability and skills to take the organisation to greater heights
        </Card.Text>
        <h4>Albert Einstein</h4>
      </Card.Body>
    </Card>
    </>
  )
}

export default ValueCard