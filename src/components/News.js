import React, { Component } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  state = { articles: [], loading: true, page: 1, totalResults: 0 }

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
    const data = await fetch(url)
    const parsedData = await data.json()
    console.log(parsedData.articles)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
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
          <h4 className="text-center my-3">
            <Spinner animation="border" role="status" variant="dark">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </h4>
        )}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={
            <h4 className="text-center my-3">
              <Spinner animation="border" role="status" variant="dark">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </h4>
          }>
          <Container>
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
          </Container>
        </InfiniteScroll>
      </Container>
    )
  }
}

export default News
