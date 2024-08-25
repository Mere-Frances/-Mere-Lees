import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="back-button">
        <div className="main-button" onClick={handleGoBack}>
            <p>Back</p>
        </div>
    </div>
  )
}

export default BackButton
