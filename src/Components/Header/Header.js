import React, { useContext } from 'react';
import { useToasts } from 'react-toast-notifications';

import { GlobalContext } from '../../Context/GlobalState';

const renderErrorNotif = (msg, addToast, removeNotifications) => {
  if (msg.length !== 0) {
    // Don't know why but need to remove first so error toast only appear once
    removeNotifications();
    msg.map((content) => addToast(content, {
      appearance: 'error'
    }));
  }
};

function Header() {
  const { error, removeNotifications } = useContext(GlobalContext);
  const { addToast } = useToasts();
  return (
    <>
      {error && renderErrorNotif(error, addToast, removeNotifications)}
      <h2>
        MONEY TRACKER
      </h2>
    </>
  );
}

export default Header;
