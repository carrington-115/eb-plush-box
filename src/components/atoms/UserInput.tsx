import { useEffect, useState } from "react";
import "../../app/design/inputStyle.css";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdOutlineStarRate } from "react-icons/md";
import { MdStarRate } from "react-icons/md";
import { inputFieldType, rateInputType } from "../../types/vartypes";

const rateInputValues: rateInputType[] = [
  { unRated: <MdOutlineStarRate />, rated: <MdStarRate /> },
  { unRated: <MdOutlineStarRate />, rated: <MdStarRate /> },
  { unRated: <MdOutlineStarRate />, rated: <MdStarRate /> },
  { unRated: <MdOutlineStarRate />, rated: <MdStarRate /> },
  { unRated: <MdOutlineStarRate />, rated: <MdStarRate /> },
];

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
  const [inputComplete, setInputComplete] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
  });

  const [cardNumberInput, setCardNumberInput] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  function upDateInput(input: string, value: string) {
    setCardNumberInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
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
    if (String(cardNumberInput.first).length === 4) {
      setInputComplete((prev) => {
        return {
          ...prev,
          first: false,
          second: true,
        };
      });
    } else if (String(cardNumberInput.second).length === 4) {
      setInputComplete((prev) => {
        return {
          ...prev,
          second: false,
          third: true,
        };
      });
    }
    if (String(cardNumberInput.third).length === 4) {
      setInputComplete((prev) => {
        return {
          ...prev,
          third: false,
          fourth: true,
        };
      });
    }
  }, [searchValue, cardNumberInput]);

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
    return (
      <div className="rate-input">
        <section className="input-section">
          {rateInputValues.map(() => (
            <span></span>
          ))}
        </section>
      </div>
    );
  } else if (type === "card") {
    return (
      <div className="card-input">
        <section className="input-section">
          <div className="top-section">
            <input
              type="number"
              className="first"
              placeholder="xxxx xxxx xxxx xxxx"
              autoFocus={inputComplete.first}
              value={cardNumberInput.first}
              onChange={(e) => upDateInput("first", e.target.value)}
            />
            <input
              type="number"
              className="seconda"
              autoFocus={inputComplete.second}
              value={cardNumberInput.second}
              onChange={(e) => upDateInput("second", e.target.value)}
            />
            <input
              type="number"
              className="third"
              autoFocus={inputComplete.third}
              value={cardNumberInput.third}
              onChange={(e) => upDateInput("third", e.target.value)}
            />
            <input
              type="number"
              className="fourth"
              autoFocus={inputComplete.fourth}
              value={cardNumberInput.fourth}
              onChange={(e) => upDateInput("fourth", e.target.value)}
            />
            <div className="account-icons"></div>
          </div>
          <div className="bottom-section">
            <div className="expiry-date">
              <input type="number" /> <p>/</p> <input type="number" />
            </div>
            <div className="cvc-code">
              <input type="number" placeholder="CVC" />
              <span className="cvc-icon"></span>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return;
}
export default UserInput;
