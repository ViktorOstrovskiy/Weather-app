import * as React from "react";
import s from "../Search/search.module.scss";
import { useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {
  setCounters,
  weathers,
  weathersCity,
} from "../../store/from-service/action";
import { useDispatch } from "react-redux";
import ButtonGps from "../ButtonGps";

const Search = ({ isLoaded }: any) => {
  const dispatch = useDispatch();
  const {
    ready,
    value,
    suggestions: { status, data },
    init,
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });
  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          dispatch(setCounters({ lat, lng }));
          dispatch(weathers());
          dispatch(weathersCity());
        })
        .catch((error) => {
          console.log("😱 Error: ", error);
        });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li className={s.li} key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref} className={s.dropdown}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Type address"
        className={s.input}
      />
      <ButtonGps />
      {status === "OK" && (
        <ul className={s.suggestions}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};

export default Search;
