import SearchBar from '../component/SearchBar';
import InfoDisplay from '../component/InfoDisplay';
import MapView from  '../component/MapView';

const Home = () => {
//   console.log("@@@@ HOME LOADED @@@@@@@");
//   const { data, loading, error } = useFetch(
//     "https://www.themealdb.com/api/json/v1/1/categories.php",
//   );

//   const showCategories = data?.categories?.slice(0, 15) || [];
  //console.log(showCategories[0].strCategory);

//   if (loading) return <Spinner></Spinner>;
//   if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>IP Address Tracker</h1>
      <SearchBar></SearchBar>
      <InfoDisplay></InfoDisplay>
      <MapView></MapView>
    </div>
  );
};

export default Home;
