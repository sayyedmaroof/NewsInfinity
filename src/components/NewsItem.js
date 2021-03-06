import { Badge, Card } from 'react-bootstrap'

const NewsItem = props => {
  const { title, description, imgUrl, newsUrl, author, date, source } = props
  return (
    <div>
      <Card className="m-3 mx-auto p-3 rounded">
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Badge pill bg="dark" text="light">
            {source}
          </Badge>
          <Card.Text>
            <small className="text-muted">
              By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}
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

export default NewsItem
