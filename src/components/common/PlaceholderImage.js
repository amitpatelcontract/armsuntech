import React from "react";
import Header from "../../components/common/Header";
import PlaceholderImage from "../../components/common/PlaceholderImage";

const PlaceholderImage = ({ text, width = 300, height = 200, bgColor = "#6971cf" }) => {
  const svgString = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-family="Arial">
        ${text}
      </text>
    </svg>
  `;

  const dataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;
  
  return dataUrl;
};

export default PlaceholderImage; 