import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

function RenderProfilePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <h1>Hi Placeholder Welcome to Yami Collections Profile Page</h1>
      <div>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </p>
      </div>
    </div>
  );
}
export default RenderProfilePage;
