import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";
const QuoteItem = (props) => {
  // console.log(props.id);

  const getQuoteId = () => {
    props.onClick(props.id);
  };

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>Author: {props.author}</figcaption>
      </figure>
      <Link to={`/quotes/${props.id}`} className='btn'>
        View
      </Link>
      <button className={`${classes.del} btn`} onClick={getQuoteId}>
        Delete
      </button>
    </li>
  );
};

export default QuoteItem;
