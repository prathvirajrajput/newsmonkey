import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalReults, setTotalResults] = useState(0);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=12ffc8bc69414eb1a9cf4458da2512b6&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalReults);
  };

  useEffect(() => {
    updateNews()
  }, []);


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=12ffc8bc69414eb1a9cf4458da2512b6&page=${page+1}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalReults);
  };

  return (
    <>
      <h2 className="text-center" style={{marginTop:'70px'}}>NewsMonkey-Top {props.category} Headlines</h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalReults}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );

  News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
};
export default News;
