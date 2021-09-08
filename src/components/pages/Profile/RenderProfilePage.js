import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

function RenderProfilePage(props) {
  const { userInfo, authService } = props;
  const [data, setData] = useState(null);
  return (
    <div>
      <h1>Hi Placeholder Welcome to Yami Collections Profile Page</h1>
      <div>
        {data ? null : <p>No Collections yet. Why not start a new one?</p>}
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
