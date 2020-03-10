import classNames from "classnames";
import PropTypes from "prop-types";
import React, {Fragment} from "react";

const Autocomplete = ({
  className,
  disabled,
  externallyControlled,
  onChange,
  onSubmit,
  placeholder = "Search",
  value,
  ...props
}) => {
  const input = React.createRef();
  const resetInput = () => {
    onChange && onChange("");
    input.current.value = "";
  };
  const submit = evt => {
    evt.preventDefault();
    onSubmit && onSubmit(evt);
  };

  const data = [
      {
        "_id": "5e677da924160c44e39cbff2",
        "employeeNumber": "469aad49-e0b5-4b81-b8e7-011216056dd3",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": {
          "first": "Hunter",
          "last": "Fox"
        },
        "company": "VIASIA",
        "email": "hunter.fox@viasia.name",
        "phone": "+1 (835) 424-3997",
        "address": "672 Montana Place, Lutsen, Connecticut, 9703",
        "latitude": "44.297661",
        "longitude": "33.455115"
      },
      {
        "_id": "5e677da958f8cf9c5c574979",
        "employeeNumber": "27a28873-c11f-438c-bfb8-089ddb77789c",
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "name": {
          "first": "Workman",
          "last": "Blair"
        },
        "company": "MAGNEMO",
        "email": "workman.blair@magnemo.org",
        "phone": "+1 (847) 470-2326",
        "address": "814 Milford Street, Sharon, North Dakota, 1095",
        "latitude": "-11.099548",
        "longitude": "-156.019454"
      },
      {
        "_id": "5e677da9aaf50c7982855565",
        "employeeNumber": "3929ded0-69a4-4b59-941a-b875cc6ca3cc",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": {
          "first": "Perez",
          "last": "Molina"
        },
        "company": "XINWARE",
        "email": "perez.molina@xinware.biz",
        "phone": "+1 (936) 571-3629",
        "address": "567 Pierrepont Place, Rivers, West Virginia, 7571",
        "latitude": "29.207101",
        "longitude": "18.921441"
      },
      {
        "_id": "5e677da9e8fe88fb5a72c3f4",
        "employeeNumber": "138e80b6-5950-4240-8767-8f66ec827b2c",
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": {
          "first": "Leach",
          "last": "Guy"
        },
        "company": "PODUNK",
        "email": "leach.guy@podunk.tv",
        "phone": "+1 (981) 453-3434",
        "address": "263 Wilson Street, Newry, Indiana, 9276",
        "latitude": "2.87966",
        "longitude": "42.880796"
      },
      {
        "_id": "5e677da95a4aad1044bfc7e3",
        "employeeNumber": "a698c97a-7b9d-4470-ad6b-ab6906673449",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": {
          "first": "Marilyn",
          "last": "Davidson"
        },
        "company": "LYRICHORD",
        "email": "marilyn.davidson@lyrichord.io",
        "phone": "+1 (870) 468-2151",
        "address": "475 Overbaugh Place, Hanover, Puerto Rico, 9409",
        "latitude": "-17.276198",
        "longitude": "173.433412"
      },
      {
        "_id": "5e677da93e282161d86abaf1",
        "employeeNumber": "3714e948-6510-43af-ade3-c9667261a377",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": {
          "first": "Hopper",
          "last": "Best"
        },
        "company": "BRISTO",
        "email": "hopper.best@bristo.co.uk",
        "phone": "+1 (838) 546-3918",
        "address": "234 Irving Street, Jessie, Nebraska, 3302",
        "latitude": "68.359685",
        "longitude": "-63.726787"
      },
      {
        "_id": "5e677da9160bd3a29db2911e",
        "employeeNumber": "56daa69a-a525-4d7e-b5b4-fc289d95a32b",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": {
          "first": "Coffey",
          "last": "Johnson"
        },
        "company": "SEQUITUR",
        "email": "coffey.johnson@sequitur.com",
        "phone": "+1 (957) 461-3030",
        "address": "599 Coleman Street, Lookingglass, Kansas, 6427",
        "latitude": "-2.302529",
        "longitude": "127.818847"
      }
    ]

  // const autoCompletejs = new autoComplete({
  //   data: {
  //     src: async () => {
  //       // Loading placeholder text
  //       document
  //         .querySelector("#autoComplete")
  //         .setAttribute("placeholder", "Loading...");
  //       // Fetch External Data Source
  //       // Post loading placeholder text
  //       document
  //         .querySelector("#autoComplete")
  //         .setAttribute("placeholder", "Search Name, IRC, Title");
  //       // Returns Fetched data
  //       return data;
  //     },
  //     key: ["name", "title", "irc"],
  //     cache: false
  //   },
  //   sort: (a, b) => {
  //     if (a.match < b.match) return -1;
  //     if (a.match > b.match) return 1;
  //     return 0;
  //   },
  //   placeHolder: "Name, IRC",
  //   selector: "#autoComplete",
  //   threshold: 0,
  //   debounce: 0,
  //   searchEngine: "strict",
  //   highlight: true,
  //   maxResults: 10,
  //   resultsList: {
  //     render: true,
  //     container: source => {
  //       source.setAttribute("id", "autoComplete_list");
  //     },
  //     destination: document.querySelector("#autoComplete"),
  //     position: "afterend",
  //     element: "ul"
  //   },
  //   resultItem: {
  //     content: (data, source) => {

  //       const name = data.key === "name" ? data.match : data.value.name;
  //       const title = data.key === "title" ? data.match : data.value.title;
  //       const irc = data.key === "irc" ? data.match : data.value.irc;
  //       const html = `
  //       <div class="p-media-object u-no-margin--bottom">
  //         <img class="p-media-object__image" src="https://picsum.photos/25" alt=""/>
  //         <div class="p-media-object__details">
  //           <p class="u-no-margin--bottom">
  //             <div>${name} (${irc})</div>
  //           </p>
  //           <p>${title}</p>
  //           <p class="p-muted-heading--small">${data.value.email}</p>
  //         </div>
  //       </div>
  //     `
  //       source.innerHTML = html
  //     }
  //   },
  //   noResults: () => {
  //     const result = document.createElement("li");
  //     result.setAttribute("class", "no_result");
  //     result.setAttribute("tabindex", "1");
  //     result.innerHTML = "No Results";
  //     document.querySelector("#autoComplete_list").appendChild(result);
  //   },
  //   onSelection: feedback => {
  //     // Details to be appended to the search box
  //     const selection = `${feedback.selection.value.name} (${feedback.selection.value.irc})`;
  //     document.querySelector(".selection").innerHTML = selection;
  //     document.querySelector(".selection").classList.add("u-hide")
  //     // Clear Input
  //     document.querySelector("#autoComplete").value = "";
  //     document.querySelector("#autoComplete").setAttribute("placeholder", "");
  //     // Change placeholder with the selected value
  //     document
  //       .querySelector("#autoComplete")
  //       .value = selection;
  //       document.querySelector("#autoComplete").setAttribute("data-id", feedback.selection.value.id)
  //   },
  // });

  // const search = (query, record) => {
  //   // Current record value toLowerCase
  //   const recordLowerCase = record.toLowerCase();
  //   // Loose mode
  //   if (this.searchEngine === "loose") {
  //     // Search query string sanitized & normalized
  //     query = query.replace(/ /g, "");
  //     // Array of matching characters
  //     const match = [];
  //     // Query character position based on success
  //     let searchPosition = 0;
  //     // Iterate over record characters
  //     for (let number = 0; number < recordLowerCase.length; number++) {
  //       // Holds current record character
  //       let recordChar = record[number];
  //       // Matching case
  //       if (searchPosition < query.length && recordLowerCase[number] === query[searchPosition]) {
  //         // Highlight matching character
  //         recordChar = this.highlight ? autoCompleteView.highlight(recordChar) : recordChar;
  //         // Increment search position
  //         searchPosition++;
  //       }
  //       // Adds matching character to the matching list
  //       match.push(recordChar);
  //     }
  //     // Non-Matching case
  //     if (searchPosition !== query.length) {
  //       return false;
  //     }
  //     // Return the joined match
  //     return match.join("");
  //     // Strict mode
  //   } else {
  //     if (recordLowerCase.includes(query)) {
  //       // Regular Expression Query Pattern Ignores caseSensitive
  //       const pattern = new RegExp(`${query}`, "i");
  //       // Search for a match Query in Record
  //       query = pattern.exec(record);
  //       // Returns the match
  //       return this.highlight ? record.replace(query, autoCompleteView.highlight(query)) : record;
  //     }
  //   }
  // }



  const handleChange = (evt) => {
    const filter = data.filter((record, index) => {
      const query = evt.replace(/ /g, "");
      const match = [];
      // Query character position based on success
      let searchPosition = 0;
      const key = "company";
      let recordValue = record[key].toLowerCase();
      for (let i = 0; i < recordValue.length; i++) {
        console.log(recordValue[i], query)
        if (searchPosition < query.length && recordValue[i] === query[searchPosition]) {
          // Highlight matching character
          const characterMatched = `<span class="highligted">${recordValue}</span>`;
          recordValue[i] = characterMatched
          searchPosition++;
        }
        match.push(recordValue)
      }
      
      
    })
  }

  return (
    <Fragment>
    <form
      className={classNames("p-search-box", className)}
      onSubmit={submit}
      {...props}
    >
      <input
        className="p-search-box__input"
        disabled={disabled}
        autoComplete="off" 
        name="search"
        onChange={evt => handleChange(evt.target.value)}
        placeholder={placeholder}
        ref={input}
        type="search"
        defaultValue={externallyControlled ? undefined : value}
        value={externallyControlled ? value : undefined}
      />
      {value && (
        <button
          alt="reset"
          className="p-search-box__reset"
          disabled={disabled}
          onClick={resetInput}
          type="reset"
        >
          <i className="p-icon--close"></i>
        </button>
      )}
      <button
        alt="search"
        className="p-search-box__button"
        disabled={disabled}
        type="submit"
      >
        <i className="p-icon--search"></i>
      </button>
    </form>
    </Fragment>
  );
};

Autocomplete.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * Whether the input value will be controlled via external state.
   */
  externallyControlled: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default Autocomplete;
