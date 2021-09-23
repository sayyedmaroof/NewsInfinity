import React, { Component } from 'react'
import { Col, Container, Row, Button, Spinner } from 'react-bootstrap'
import Loader from './Loader'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  state = { articles: [], loading: false, page: 1 }

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
    totalResults: 0,
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
    this.setState({ loading: true })
    const data = await fetch(url)
    const parsedData = await data.json()
    console.log(parsedData.articles)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    document.title =
      'NewsInfinity - ' +
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1)
  }

  async componentDidMount() {
    this.updateNews()
  }

  handlePreviousClick = async () => {
    await this.setState({ page: this.state.page - 1 })
    console.log(this.state.page, 'clicked previous')
    this.updateNews()
  }

  handleNextClick = async () => {
    await this.setState({ page: this.state.page + 1 })
    console.log(this.state.page, 'clicked next')
    this.updateNews()
  }

  render() {
    return (
      <Container className="my-4">
        <h2 className="text-center">
          NewsInfinity - Top{' '}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{' '}
          Headlines
        </h2>
        {this.state.loading && (
          <Container className="text-center">
            <Loader />
          </Container>
        )}
        {!this.state.loading && (
          <Row>
            {this.state.articles
              .filter(article => article.description && article.title)
              .map(article => {
                return (
                  <Col sm={12} md={6} lg={4} xl={3} key={article.url}>
                    <NewsItem
                      title={article.title}
                      description={article.description}
                      imgUrl={article.urlToImage}
                      newsUrl={article.url}
                      author={article.author}
                      date={article.publishedAt}
                      source={article.source.name}
                    />
                  </Col>
                )
              })}
          </Row>
        )}
        <Container className="d-flex justify-content-between">
          {this.state.loading ? (
            <Button variant="dark" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          ) : (
            <Button
              variant="dark"
              size="lg"
              onClick={this.handlePreviousClick}
              disabled={this.state.page <= 1}>
              &larr; Previous
            </Button>
          )}
          {this.state.loading ? (
            <Button variant="dark" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          ) : (
            <Button
              variant="dark"
              size="lg"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }>
              Next &rarr;
            </Button>
          )}
        </Container>
      </Container>
    )
  }
}

export default News
