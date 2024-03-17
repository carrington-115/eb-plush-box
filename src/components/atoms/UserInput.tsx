import { useEffect, useState } from "react";
import "../../app/design/inputStyle.css";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

interface inputFieldType {
  type: string;
  inputType?: string;
  placeholder?: string;
  inputName: string;
  dropDown?: dropDownValues;
}

type dropDownValues = {
  dropDownName: string;
  dropDownValues: string[];
};

function UserInput({
  type,
  placeholder,
  inputType,
  inputName,
  dropDown,
}: inputFieldType) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [onSearch, setOnSearch] = useState<boolean>(false);

  function setEmptySearch() {
    if (onSearch === true) {
      setSearchValue("");
    }
  }

  useEffect(() => {
    function checkIfUserSearch() {
      if (searchValue !== "") {
        setOnSearch(true);
      } else {
        setOnSearch(false);
      }
    }
    checkIfUserSearch();
  }, [searchValue]);

  if (type === "simple") {
    return (
      <div className="simple-input">
        <input type={inputType} name={inputName} placeholder={placeholder} />
      </div>
    );
  } else if (type === "multiline") {
    return (
      <div className="multiline-input">
        <textarea rows={5} name={inputName} placeholder={placeholder} />
      </div>
    );
  } else if (type === "search") {
    return (
      <div className="search-input">
        <div className="input-section">
          <input
            type="text"
            name={inputName}
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <span className="search-icon" onClick={setEmptySearch}>
          {onSearch ? (
            <IoMdClose fill="rgba(67, 31, 23, 1)" />
          ) : (
            <IoIosSearch fill="rgba(67, 31, 23, 1)" />
          )}
        </span>
      </div>
    );
  } else if (type === "checkbox") {
    return (
      <div className="checkbox-input">
        <input type="checkbox" />
        <label htmlFor={inputName}>{placeholder}</label>
      </div>
    );
  } else if (type === "dropdown") {
    return (
      <div className="dropdown-input">
        <select name={dropDown?.dropDownName}>
          {dropDown?.dropDownValues.map((content, index) => (
            <option key={index} value={content}>
              {content}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (type === "rate") {
    return <></>;
  } else if (type === "card") {
    return <></>;
  }
  return;
}
export default UserInput;
