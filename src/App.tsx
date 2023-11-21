import React from "react";
import OfflinePage from "./component/OfflinePage";
import OnlinePage from "./component/OnlinePage";
// import UseNetwork from "./hooks/useNetwork";
import { Detector } from "react-detect-offline";

// function App() {
//   const { online } = UseNetwork();

//   return <>{online ? <OnlinePage /> : <OfflinePage />}</>;
// }

function App() {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <>
      <Detector
        render={({ online }) => (
          <div>
            {online ? (
              <OnlinePage />
            ) : (
              <OfflinePage
              show={modalShow}
              onHide={() => setModalShow(true)}
              />
            )}
          </div>
        )}
      />
    </>
  );
}

export default App;
