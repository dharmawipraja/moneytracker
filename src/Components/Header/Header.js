import React, { useContext } from 'react';
import { useToasts } from 'react-toast-notifications';

import { GlobalContext } from '../../Context/GlobalState';

const renderError = (msg, addToast, removeNotifications) => {
  if (msg.length !== 0) {
    // Don't know why but need to remove first so error toast only appear once
    removeNotifications();
    msg.map((content) => addToast(content, {
      appearance: 'error'
    }));
  }
};

const Header = () => {
  const { error, removeNotifications } = useContext(GlobalContext);
  const { addToast } = useToasts();
  return (
    <>
      {error && renderError(error, addToast, removeNotifications)}
      <h2>
        MONEY TRACKER
      </h2>
    </>
  );
};

export default Header;
