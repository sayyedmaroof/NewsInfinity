import { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

const News = props => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&pageSize=${
      props.pageSize
    }&page=${page + 1}`
    setPage(page + 1)
    const data = await fetch(url)
    const parsedData = await data.json()
    console.log(parsedData.articles)

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`
    setLoading(true)
    const data = await fetch(url)
    props.setProgress(30)
    const parsedData = await data.json()
    props.setProgress(70)
    console.log(parsedData.articles)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
    document.title =
      'NewsInfinity - ' +
      props.category.charAt(0).toUpperCase() +
      props.category.slice(1)
  }

  useEffect(() => {
    updateNews()
    // eslint-disable-next-line
  }, [])

  return (
    <Container className="my-4">
      <h2 className="text-center">
        NewsInfinity - Top{' '}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{' '}
        Headlines
      </h2>

      {loading && (
        <h4 className="text-center my-3">
          <Spinner animation="border" role="status" variant="dark">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </h4>
      )}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={
          <h4 className="text-center my-3">
            <Spinner animation="border" role="status" variant="dark">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </h4>
        }>
        <Container>
          <Row>
            {articles
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

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
