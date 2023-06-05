
const NewsItem = ({url, imgSrc, imgAlt, category, title, date}) => {

    if (!title || !url) {
        return '';
    }

    const categoryElement = category && <span className="news-category">{category}</span>;
    const dateElement = date && <span className="news-date">{date} </span>;
    const titleElement =  <h3 className="news-title">{title}</h3>;
    const imageElement = imgSrc && (
        <div className="image-wrapper"> 
        <img src={imgSrc} alt={imgAlt}/>
        </div>
    );

  return (
    <div className="news-item"> 
        <a href={url}>
        {imageElement}
        <div className="news-content"> 
            {categoryElement}
            {titleElement}
            {dateElement}
        </div>
        </a> 
    </div>
  )
}

export default NewsItem