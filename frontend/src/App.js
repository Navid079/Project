import Toggle from './components/UI/Toggle';
import TextInput from './components/UI/TextInput/TextInput';

import './App.css';
import TextInputO from './components/UI/TextInput/TextInputO';
import Button from './components/UI/Button/Button';

function App() {
  return (
    <div>
      <Toggle left="ورود" right="ثبت نام" />
      <TextInput placeholder="نام کاربری" />
      <TextInputO placeholder='نام کاربری' icon='healthicons:ui-user-profile-outline' />
      <TextInputO placeholder='گذرواژه' icon='carbon:password' />
      <Button>ورود</Button>
    </div>
  );
}

export default App;
