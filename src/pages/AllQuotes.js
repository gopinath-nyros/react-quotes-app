import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
  // console.log("inside component");
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    // console.log("inside effect function...");
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "error") {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
