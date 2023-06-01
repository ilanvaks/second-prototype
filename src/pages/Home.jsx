import { Container,Row,Col } from "react-bootstrap"
import Gallery from "../components/Gallery"
import AppLayout from "../layout/AppLayout.jsx"

export default function Home () {

  return (
    <AppLayout>
      <Container className="my-5">
        <Row>
          <Col>
            <h2>Home</h2>
            </Col>
            </Row>
            <Row>
              <Col md={11} lg={9} xl={8} className="mb-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reiciendis accusantium aliquam? Quidem, ex ipsum placeat ad est tempora dicta neque atque itaque maxime dolore laborum ab nobis, magnam doloribus?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad ea quasi maiores temporibus vitae voluptatum dolorum nam quaerat ratione nisi corporis ab et cum, architecto molestiae impedit ut nobis.</p>
          </Col>
        </Row>
      </Container>
      <Gallery/>
    </AppLayout>
  )
}