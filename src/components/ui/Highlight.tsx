import React from "react";

interface HighlightProps {
  query: string[];
  children: string;
  // highlightClass?: string;
  className?: string;
}

const Highlight: React.FC<HighlightProps> = ({
  query,
  children,
  className,
}) => {
  if (!query || query.length === 0) return <>{children}</>;

  // Create a regular expression from the query array
  const regex = new RegExp(`(${query.join("|")})`, "gi");

  // Split the text based on the query array
  const parts = children.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        query.some((q) => q.toLowerCase() === part.toLowerCase()) ? (
          <span key={index} className={className}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default Highlight;
