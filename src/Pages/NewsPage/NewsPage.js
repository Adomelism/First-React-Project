import './NewsPage.css';
import NewsContent from '../../Components/NewsPageComponents/NewsContent';
import VideoSection from '../../Components/NewsPageComponents/VideoSection';
import PodcastSection from '../../Components/NewsPageComponents/PodcastSection';
import EventsSection from '../../Components/EventsSection';

function NewsPage () {
    return (

        <div className="container">
        <div className="content-wrapper">
            <main className="main-content">
                <NewsContent title='Naujienos'/>
                <VideoSection />
            </main>
            <aside className="sidebar-content">
                <PodcastSection />
                <EventsSection />
            </aside>
        </div>
    </div>
    )
}

export default NewsPage