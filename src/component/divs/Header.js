import "./Header.css";

export default function Searchdiv({location , setlocation , searchLocation ,Data ,setError ,setData}) {

  function changeText(event) {
    setlocation(event.target.value);
  }
  function handleSearch() {
    searchLocation(location); 
  }
  function Clear(){
    setlocation('');  
    setData({});  
    setError();  
  }
  return (
    <div className="Header">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Your Location"
          value={location}
          onChange={changeText}
        />
      </div>
      <div>
        <button  onClick={handleSearch}>
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div>
        <button  onClick={Clear}>
          Clear
        </button>
      </div>
    </div>
  );
}
