import React, { useState, Fragment } from "react";

import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const [isAuthor, setIsAuthor] = useState("");
  const [isText, setIsText] = useState("");

  const [isAuthorValid, setIsAuthorValid] = useState(false);
  const [isTextValid, setIsTextValid] = useState(false);

  const [isAuthorTouched, setIsAuthorTouched] = useState(false);
  const [isTextTouched, setIsTextTouched] = useState(false);

  const authorNameChangeHandler = (event) => {
    setIsAuthor(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsAuthorValid(true);
    }
  };

  const authorBlurHandler = () => {
    setIsAuthorTouched(true);
    if (isAuthor.trim() === "") {
      setIsAuthorValid(false);
    }
  };

  const textChangeHandler = (event) => {
    setIsText(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsTextValid(true);
    }
  };

  const textBlurHandler = () => {
    setIsTextTouched(true);
    if (isText.trim() === "") {
      setIsTextValid(false);
    }
  };

  function submitFormHandler(event) {
    event.preventDefault();
    setIsAuthorTouched(true);
    setIsTextTouched(true);
    if (isAuthor.trim() === "") {
      setIsAuthorValid(false);
      return;
    }
    if (isText.trim() === "") {
      setIsTextValid(false);
      return;
    }
    setIsAuthorValid(true);
    setIsTextValid(true);
    console.log(isAuthor, isText);
    props.onAddQuote({ author: isAuthor, text: isText });
    setIsAuthor("");
    setIsText("");
  }

  const focusHandler = () => {
    console.log("focused");
    setIsEntering(true);
  };

  const finishedEntering = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={"are you sure to leave this page.? All data will be lost"}
      />

      <Card>
        <form
          className={classes.form}
          onFocus={focusHandler}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input
              type='text'
              id='author'
              value={isAuthor}
              onBlur={authorBlurHandler}
              onChange={authorNameChangeHandler}
            />
            {isAuthorTouched && !isAuthorValid && (
              <span className={classes.error}>please enter author</span>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea
              id='text'
              rows='5'
              value={isText}
              onBlur={textBlurHandler}
              onChange={textChangeHandler}
            ></textarea>
            {isTextTouched && !isTextValid && (
              <span className={classes.error}>please enter text</span>
            )}
          </div>
          <div className={classes.actions}>
            <button className='btn' onClick={finishedEntering}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
