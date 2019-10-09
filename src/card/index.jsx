import React from 'react';

const Card = ({ src, onClick, alt }) => <img src={src} onClick={onClick} alt={alt} width="200" height="199" />;

export default Card;