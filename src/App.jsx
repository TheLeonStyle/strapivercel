import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';

function App() {
  return (
    <section className="app">
      {/* <div className="app__aside"> */}
      <Aside />
      {/* </div> */}
      {/* <div className="app__content"> */}
      <Content />
      {/* </div> */}
    </section>
  );
}

export default App;
