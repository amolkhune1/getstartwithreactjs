import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";

interface Props {
  count?: number;
  rating: number;
  color?: { filled: string; unfilled: string };
  onRatingCall: (input: number) => void;
}
function Rating({
  count = 5,
  rating = 0,
  color = { filled: "#f5eb3b", unfilled: "#dcdcdc" },
  onRatingCall,
}: Props) {
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = (index: number) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (hoverRating == 0 && rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };
  const starrating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((id) => (
        <FontAwesomeIcon
          key={id}
          className="cursor-pointer"
          icon="star"
          onClick={() => {
            onRatingCall(id);
          }}
          onMouseEnter={() => setHoverRating(id)}
          onMouseLeave={() => setHoverRating(0)}
          style={{ color: getColor(id) }}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div>{starrating}</div>;
}

export default Rating;
