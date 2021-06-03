import { Fragment, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import useHttp from "../../hooks/use-http";
import { deleteQuote } from "../../lib/api";
import NoQuotesFound from "./NoQuotesFound";
import classes from "./QuoteList.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

// sort
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const { sendRequest, status } = useHttp(deleteQuote);
  const [loadQuotes, setLoadQuotes] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";
  // calling the sort function

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
    sortQuotes(loadQuotes, isSortingAscending);
  };

  // for delete
  const deleteHandler = (quoteId) => {
    console.log(loadQuotes.length);
    const deleteQuote = loadQuotes.filter((quote) => quote.id === quoteId);
    sendRequest(deleteQuote);
    console.log(status);
    setLoadQuotes((prevQuotes) => {
      const updatedQuotes = prevQuotes.filter((quote) => quote.id !== quoteId);
      return updatedQuotes;
    });
  };

  console.log("comp re rendering");

  useEffect(() => {
    setLoadQuotes(props.quotes);
  }, [props.quotes]);

  if (status === "pending") {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && (!loadQuotes || loadQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {loadQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
            onClick={deleteHandler}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
