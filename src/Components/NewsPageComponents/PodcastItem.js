
const PodcastItem = () => {
  return (
        <div className="podcast">
            <div className="podcast-controls"> <img className="podcast-image"
                    src="https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png" alt="podcast host"/>
                <span className="podcast-length">Trukmė: 7:55</span> <button className="podcast-play"></button>
            </div>
            <div className="podcast-content">
                <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas
                </h3> <span className="podcast-date">2021-09-02</span>
            </div>
        </div>
        )
}

export default PodcastItem