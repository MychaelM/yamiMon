import React from 'react';
import { Link } from 'react-router-dom';

function RenderLandingPage(props) {
  return (
    <div>
      <h1>Landing Page for Yami Collections</h1>
      <div>
        <p>Placeholder data for landing page information.</p>
        <p>
          <Link to="/">Will link to CTA pages as neccessary</Link>
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
