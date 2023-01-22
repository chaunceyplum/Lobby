import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'

const RenderPostCard = (data, key) => {
  // const data = useSelector((state) => state.posts)

  return (
    <div>
      <br />
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>{data.data.name}</h1>
          </CardTitle>
          <CardSubtitle>
            <h4>{data.data.gamertag}</h4>
          </CardSubtitle>
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

export default RenderPostCard
