import ChildCopmponent from './ChildCopmponent';
import './App.css';
import tachyons from 'tachyons';

function App() {
  return (
    <>
      <div >
        <ChildCopmponent number={'58,740'} icon={'$'} label={'dolars'} />
        <ChildCopmponent number={'100,400'} icon={'&'} label={'friends'} />
        <ChildCopmponent number={'5,837,401'} icon={'@'} label={'diamonds'} />
        <ChildCopmponent number={'6,546,415'} icon={'#'} label={'food'} />
        <ChildCopmponent number={'784,321'} icon={'!!!'} label={'wedding'} />
        <ChildCopmponent number={'7,778,884'} icon={'*'} label={'nature'} />
        <ChildCopmponent number={'784,598'} icon={'^^'} label={'hotels'} />
        <ChildCopmponent number={'1,000,000'} icon={'%%'} label={'events'} />
      </div>
    </>

  );
}

export default App;
