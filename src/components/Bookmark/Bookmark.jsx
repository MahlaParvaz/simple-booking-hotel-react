import ReactCountryFlag from 'react-country-flag';
import Loader from '../Loader/Loader';
import { useBookmark } from '../context/BookmarkListProvider';
import { Link } from 'react-router-dom';

function Bookmark() {
  const { isLoading, bookmarks } = useBookmark();
  if (isLoading) return <Loader />;

  return (
    <div>
      <h2>Bookmark</h2>
      <div className="bookmarkList">
        {bookmarks.map((item) => {
          return (
            <Link
              key={item.id}
              to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >
              <div className="bookmarkItem">
                <ReactCountryFlag svg countryCode={item.countryCode} />
                &nbsp; <strong>{item.cityName}</strong> &nbsp;
                <span>{item.country}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Bookmark;
