import React from 'react'
// import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { brown, red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const RenderPostCard = (data, key) => {
  // const data = useSelector((state) => state.posts)
  const firstName = data.data.name
  // const firstLetterOfName = firstName.charAt(1)

  return (
    <div>
      <br />
      {/* <Card>
        <CardContent>
          <CardHeader>
            <h1>{data.data.gamertag}</h1>

            <CardSubtitle>
              <h4>{data.data.console}</h4>
              <h4>{data.data.timePosted}</h4>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <CardText>
              {data.data.likedBy.length ? (
                <h3>{`this post was liked by${data.data.likedBy[0]}, ${data.data.likedBy[1]}, ...`}</h3>
              ) : (
                <h3>Be the first to like tthe post</h3>
              )}
            </CardText>

            <h6>{`Post Id:${data.data.id}`}</h6>
            <h6>{data.data.post}</h6>
          </CardBody>
        </CardContent>
      </Card> */}

      <Card sx={{ maxWidth: 345 }} className='offsetBackground'>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: brown[700] }} aria-label=''>
              c
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={data.data.gamertag}
          subheader={data.data.console}
        />

        <CardContent>
          <Typography variant='h6' color='text-primary'>
            {data.data.post}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {data.data.post}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label='add to favorites'
            sx={{ bgcolor: brown[700] }}
          >
            <FavoriteIcon />
          </IconButton>
          <br />
          <IconButton aria-label='share' sx={{ bgcolor: brown[700] }}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <br />
    </div>
  )
}

export default RenderPostCard
