import React, { Component } from 'react'
import { Badge, Card } from 'react-bootstrap'

export class NewsItem extends Component {
  render() {
    const { title, description, imgUrl, newsUrl, author, date, source } =
      this.props
    return (
      <div>
        <Card className="m-3 mx-auto p-3 rounded">
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Badge pill bg="light" text="dark">
              {source}
            </Badge>
            <Card.Text>
              <small className="text-muted">
                By {author ? author : 'Unknown'} on{' '}
                {new Date(date).toGMTString()}
              </small>
            </Card.Text>

            <a
              className="btn btn-primary"
              href={newsUrl}
              target="_blank"
              rel="noreferrer">
              Read More
            </a>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default NewsItem
