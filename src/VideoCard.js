import React, { forwardRef } from "react";
import "./videocard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
const base_url = "https://image.tmdb.org/t/p/original";
const VideoCard = forwardRef(({ src, date, description, title, vote },ref) => {

  


  return (
    <div ref={ref} className="videoCard">
      <img src={base_url + src} alt={title} />

      <TextTruncate
        element="p"
        line={1}
        truncateText="..."
        text={description}
      />

      <h2>{title}</h2>
      <p className="videoCard_stats">
        Release date : {date}
        <ThumbUpSharp />
        {vote}{" "}
      </p>
    </div>
  );
});

export default VideoCard;
