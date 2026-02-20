import './App.css';
import Button from './components/Button/index.js';
import Dialog from './components/Dialog/index.js';
import Dropdown from './components/Dropdown/index.js';
// import TabsComponent from './components/tabs/index.js';
// import Form from './components/form/index.js';
// import ToastComponent from './components/Toast/index.js';
import ButtonComp from './components/Button/index.js';
import DialogComponent from './components/Dialog/index.js';

function App() {
  const items = [
    { name: 'button', Component: <ButtonComp /> },
    // { name: 'dialog', Component: <DialogComponent/> },
    // { name: 'dropdown', Component: <Dropdown/> },
    // { name: 'tabs', Component: <TabsComponent/> },
    // { name: 'form', Component: <Form/> },
    // { name: 'roast', Component: <Roast/> },
    // { name: 'toast', Component: <ToastComponent/> },
  ];

  return (
    <div className="App">
      <main className="grid-container">
        {items.map((item, i) => (
          <div key={i} className="grid-box">
            {item.Component}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
