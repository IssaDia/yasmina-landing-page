import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const getScore = (stars) => {
 const scoreArray = [];
 for (let i = 0; i < stars; i++) {
  scoreArray.push(<FontAwesomeIcon icon={faStar} />);
 }
 return scoreArray;
};
