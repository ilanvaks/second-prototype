import { Container,Row,Col } from "react-bootstrap"
import AppLayout from "../layout/AppLayout.jsx"


export default function About () {

  return (
    <AppLayout>
      <Container>
        <Row>
          <Col>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro magnam aut, omnis similique assumenda exercitationem eaque minima repudiandae officia mollitia fuga expedita ipsam, fugit, dignissimos vero ratione adipisci saepe.</p>
          </Col>
        </Row>
      </Container>
    </AppLayout>
  )
}