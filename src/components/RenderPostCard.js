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
            <h1>{data.gamertag}</h1>
          </CardTitle>
          <CardSubtitle>
            <h4>{data.data.console}</h4>
            <h4>{data.data.timePosted}</h4>
          </CardSubtitle>

          <CardText>
            {data.data.likedBy ? (
              <h3>{`this post was liked by${data.data.likedBy[0]}, ${data.data.likedBy[1]}, ...`}</h3>
            ) : (
              <h3>Be the first to like tthe post</h3>
            )}
          </CardText>
        </CardHeader>

        <CardBody>
          {/* <h6>{`Post Id:${data.data.id}`}</h6> */}
          <h6>{data.data.post}</h6>
        </CardBody>
      </Card>
      <br />
    </div>
  )
}

export default RenderPostCard
