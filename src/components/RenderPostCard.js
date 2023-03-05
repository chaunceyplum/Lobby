import React, { useState } from 'react'
// import { Card } from 'react-bootstrap'

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
import { useDispatch, useSelector } from 'react-redux'

import submitLike from '../redux/DataSlice'

const RenderPostCard = (data, key) => {
  const [liked, setLiked] = useState(false)
  //const sendLike = useSelector(submitLike)
  return (
    <div className='center' style={{ width: '100%' }}>
      <br />
      {console.log(data)}
      <Card sx={{ width: '100%' }} className='offsetBackground'>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: brown[700] }} aria-label=''>
              c
            </Avatar>
          }
          action={
            <IconButton aria-label='settings' className='buttons'>
              <MoreVertIcon />
            </IconButton>
          }
          title={data.data.gamertag}
          subheader={data.data.console}
        />

        <CardContent>
          <Typography variant='h6' color='text-primary'>
            {data.data.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {data.data.post}
          </Typography>
          <Typography>{data.data.likedBy}</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label='add to favorites'
            sx={{ bgcolor: brown[700] }}
            className='buttons'
            //onClick={() => sendLike()}
          >
            <FavoriteIcon />
          </IconButton>
          <br />
          <IconButton
            aria-label='share'
            sx={{ bgcolor: brown[700] }}
            className='buttons'
          >
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <br />
    </div>
  )
}

export default RenderPostCard
