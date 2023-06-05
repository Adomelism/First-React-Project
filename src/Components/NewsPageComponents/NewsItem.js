
const NewsItem = ({url, imgSrc, imgAlt, category, title, date}) => {
  return (
    <div className="news-item"> <a href={url}>
    <div className="image-wrapper"> <img
            src={imgSrc} alt={imgAlt}/>
    </div>
    <div className="news-content"> <span className="news-category">{category}</span>
        <h3 className="news-title">{title}</h3> <span
            className="news-date">{date}</span>
    </div>
</a> </div>
  )
}

export default NewsItem