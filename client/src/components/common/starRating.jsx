import React from "react";
import { Button } from "../ui/button";
import { StarIcon } from "lucide-react";

const StarRatingComponent = ({ rating, handleRatingChange }) => {
  return [1, 2, 3, 4, 5].map((star) => (
    <Button
      className={`p-2 rounded-full transition-colors ${
        star <= rating
          ? "text-yellow-700 hover:bg-blue-950"
          : "text-yellow-700 hover:bg-primary hover:text-primart-foreground"
      } `}
      variant="outline"
      size="icon"
      onClick={ handleRatingChange ? ()=> handleRatingChange(star): null}
    >
      <StarIcon
        className={`w-6 h-6 ${
          star <= rating ? "fill-yellow-700" : "fill-blank"
        }`}
      />
    </Button>
  ));
};

export default StarRatingComponent;
