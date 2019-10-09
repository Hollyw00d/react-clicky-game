import React from 'react';

const Card = ({ src, onClick, alt }) => <img src={src} onClick={onClick} alt={alt} />;

export default Card;