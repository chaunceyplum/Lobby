import React from 'react'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'

const Testimonials = () => {
  return (
    <div className='offsetBackground1'>
      <Container>
        <div>
          <h2>Testimonials</h2>
          <br />
          <Container>
            <Row>
              <Col xs={12} md={6} lg={3}>
                <Card>
                  <CardBody className='bg'>
                    <h6>Rating:4/5</h6>
                    <CardText>9 months ago</CardText>
                    <br />
                    <h6>
                      "I can't imagine my gaming life without this platform. It
                      has allowed me to discover new games, form gaming groups,
                      and even compete in tournaments. The platform's
                      user-friendly interface and helpful features make it a
                      must-have for any gamer looking to level up their gaming
                      experience!"
                    </h6>
                    <br />
                    <h5>- Stephanie Q</h5>
                  </CardBody>
                </Card>
                <br />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Card>
                  <CardBody className='bg'>
                    <h6>Rating:5/5</h6>
                    <CardText>3 months ago</CardText>
                    <br />
                    <h6>
                      "I've been searching for a platform that truly understands
                      gamers' needs, and I found it here. The community is
                      diverse, welcoming, and filled with passionate gamers.
                      Whether you're a casual player or a hardcore gamer, this
                      platform caters to everyone. I've made lifelong friends
                      and found teammates for my gaming sessions. It's a gamer's
                      paradise!"
                    </h6>
                    <br />
                    <h5>- Charles A</h5>
                  </CardBody>
                </Card>
                <br />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Card>
                  <CardBody className='bg'>
                    <h6>Rating:4.5/5</h6>
                    <CardText>2 months ago</CardText>
                    <br />
                    <h6>
                      "As a competitive gamer, I'm always looking for ways to
                      improve my skills and compete at a higher level. This
                      platform has been a game-changer for me. The platform's
                      matchmaking feature helped me find skilled teammates for
                      intense multiplayer battles. With its robust communication
                      tools, we coordinate strategies and dominate the
                      leaderboards together!"
                    </h6>
                    <br />
                    <h5>- Sophia M</h5>
                  </CardBody>
                </Card>
                <br />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Card>
                  <CardBody className='bg'>
                    <h6>Rating:5/5</h6>
                    <CardText>7 months ago</CardText>
                    <br />
                    <h6>
                      "This platform has exceeded my expectations. It not only
                      connects gamers but also fosters a sense of community.
                      I've participated in engaging discussions, shared gaming
                      tips, and even organized gaming events with fellow
                      members. It's refreshing to be part of a platform that
                      truly cares about its users and creates an inclusive and
                      vibrant gaming environment."
                    </h6>
                    <br />
                    <h5>- Ava P</h5>
                  </CardBody>
                </Card>
                <br />
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div>
          <Container>
            <div>
              <h2>Some styles done by our amazing team</h2>
              <br />
              <Container>
                <Row></Row>
              </Container>
              <br />
            </div>
          </Container>
        </div> */}
      </Container>
    </div>
  )
}

export default Testimonials
