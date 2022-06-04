import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import defaultImg from './newsdef.jpg'
import load from './Spinner-2.gif'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
const NewsComponent= (props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0)
    const updateNews= async()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
    }
useEffect(() => {
updateNews();
},[])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };

    
    
        return (
            <>
                <div className="container mx-auto" style={loading === true ? { display: "block", margin: "300px" } : { display: "none", margin: "300px" }}>
                    {loading && <Spinner />}
                </div>

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<img src={load} style={{ display: 'block' }} className={`text-center mx-auto my-3 ${loading === true ? `d-none` : ``}`} alt="loading" />}
                >
                    <div className={`container my-3 ${loading === true ? `d-none` : ``}`}>
                        <h1 className="text-center" style={{marginTop: '90px'}}>{props.category} News Headlines</h1>
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col md-3 my-3" key={element.url}>
                                    <NewsItem title={element.title != null ? element.title.slice(0, 35) : "Breaking News"} description={element.description != null ? element.description.slice(0, 80) : "Please click Read More button below to know more about this news."} image={element.urlToImage != null ? element.urlToImage : defaultImg} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    
}
NewsComponent.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'General'
}
NewsComponent.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default NewsComponent
