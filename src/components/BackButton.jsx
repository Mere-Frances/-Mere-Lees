import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Links from '../routes/Links';

const BackButton = ({pageLink}) => {
  const navigate = useNavigate();

  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  return (
    <Link className="back-button secondary-button" to={pageLink}>
      Back
    </Link>
  )
}

export default BackButton
