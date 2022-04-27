import React, { useState } from "react";
import Input from "../../atoms/Input";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@material-ui/icons/Close';
import "./Searchbar.css";

function Searchbar({data}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter= (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
          return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      if(searchWord === "") {
          setFilteredData([]);
      }else {
      setFilteredData(newFilter);
      }
  }
  const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
  }
  return (
    <div className="">
      <div className="input-group">
        <Input
          className="form-control search-bar plp-no__results}"
          label="Buscar ..."
          onChange={handleFilter}
          value={wordEntered}
        />
        <div className="input-group-append searchicon">
            {filteredData.length === 0 ? 
            (<SearchIcon />) 
            : 
            (<CloseIcon id="clearbtn" onClick={clearInput} />)}        
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataresult">
          {filteredData.slice(0,7).map((value, index) => {
            return <div key={ index}  className="dataitem"><a href={value.url} target="_blank" rel="noreferrer">{value.name}</a></div>;
          })}
        </div>
      )}
    </div>
  );
}
export default Searchbar;