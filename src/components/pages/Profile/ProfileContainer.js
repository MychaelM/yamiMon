import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderProfilePage from './RenderProfilePage';

function ProfileContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  // useEffect(() => {
  //   let isSubscribed = true;

  //   memoAuthService
  //     .getUser()
  //     .then(info => {
  //       // if user is authenticated we can use the authService to snag some user info.
  //       // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
  //       if (isSubscribed) {
  //         setUserInfo(info);
  //       }
  //     })
  //     .catch(err => {
  //       isSubscribed = false;
  //       return setUserInfo(null);
  //     });
  //   return () => (isSubscribed = false);
  // }, [memoAuthService]);

  return (
    <>
      {/* {false && !userInfo && (
        <LoadingComponent message="Fetching user profile..." />
      )} */}

      <RenderProfilePage userInfo={userInfo} authService={authService} />
    </>
  );
}

export default ProfileContainer;
