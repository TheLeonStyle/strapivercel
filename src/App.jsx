import { useState } from 'react';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';

function App() {
  const [navActive, setNavActive] = useState(1);

  const token =
    '1a7e1e8330a948d66152bad3ca6b66ab7b81ddf8d95c0bd7676a829fe4add9f4cdb495a2f035ab9c866e24d92bfa37f12f3098a0e5b728e4aa6f62a9661ffd9fb6958d69526aaccf653b3bc15e571ceba1ee3a71ed6dfd6424b1afc68b80a41473e3413d3d84f51f3dcbede9344a7c265afb8e0985e3892bfbae671dc9ba0cc2';
  // const token =
  //   '3a9b0c80fe33f378fea1474b301895b21a5dbd1011913b98dfd1ccc1508c78f6703d2be9a3874c42a2dc7bcc3615090918f68e84e5e12524bab059c82617a62e569cab3fe53dacebe43e1f4b3a93bafe76377aea48e33791d88312e6c4c09f67264ca9fe0e4bd5581ab0e38bc43020793cbbae9c4b81fc85c39eb5e39242b2ab';

  return (
    <section className="app">
      {/* <div className="app__aside"> */}
      <Aside navActive={navActive} setNavActive={setNavActive} />
      {/* </div> */}
      {/* <div className="app__content"> */}
      <Content navActive={navActive} token={token} />
      {/* </div> */}
    </section>
  );
}

export default App;
