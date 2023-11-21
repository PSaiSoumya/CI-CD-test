import React from "react";

const UseNetwork = () => {
  const [state, setState] = React.useState({
    online: navigator.onLine,
  });
  React.useEffect(() => {
    const handleOnlilne = () => {
      setState((prevState) => ({
        ...prevState,
        online: true,
      }));
    };

    const handleOffline = () => {
      setState((prevState) => ({
        ...prevState,
        online: false,
      }));
    };

    window.addEventListener("online", handleOnlilne);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnlilne);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return state;
};

export default UseNetwork;
