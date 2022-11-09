import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

const RenderServiceCard = (data, key) => {
  // const data = useSelector((state) => state.posts)

  return (
    <div>
      <br />
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>{data.data.title}</h1>
          </CardTitle>
          <CardText>
            <h3>{`User Id:${data.data.userId}`}</h3>
          </CardText>
        </CardHeader>

        <CardBody>
          <h6>{`Post Id:${data.data.id}`}</h6>
          <h6>{data.data.body}</h6>
        </CardBody>
      </Card>
      <br />
    </div>
  )
}

export default RenderServiceCard
