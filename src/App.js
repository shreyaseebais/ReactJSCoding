import React from 'react';
import './style.css';
import Counter from './Components/Counter';
import LoginMessage from './Components/LoginMessage';
import LoginControl from './Components/LoginControl';
import NameForm from './Components/NameForm';
import WelcomeEffect from './Components/WelcomeEffect';
import UsersAPI from './Components/UsersAPI';
import ParentCounter from './Components/ParentChildRelation/ParentCounter';
import ParentFormHandler from './Components/ParentChildRelation/ParentFormHandler';
import RouteMainPage from './Components/Router/RouteMainPage';
import FormMultipleInputs from './Components/FormMultipleInputs';
import ControlledComponent from './Components/ControlledComponent';
import UncontrolledComponent from './Components/UncontrolledComponent';
import UserPropsChild from './Components/UserPropsChild';
import CounterWithUseReducer from './Components/CounterWithUseReducer';
import ProfileForm from './Components/ProfileFormUseReducer';
import HookDashboard from './Components/HookDashboard';
import FinanceTracker from './FinanceTrackerProj/FinanceTracker';
import AuthenticationProject from './AuthenticationProj/Authentication';

export default function App() {
  return (
    <>
      {/* <UserPropsChild></UserPropsChild> */}
      {/* <Counter /> */}
      {/* <LoginMessage loggedIn={true} /> */}
      {/* <LoginMessage loggedIn={false} /> */}
      {/* <p>--Login Control---------------------------------------</p> */}
      {/* <LoginControl /> */}
      {/* <NameForm /> */}
      {/* <WelcomeEffect /> */}
      {/* <UsersAPI /> */}
      {/* {<ParentCounter/>} */}
      {/* {<ParentFormHandler/>} */}
      {/* {<RouteMainPage/>}  */}
      {/* <FormMultipleInputs></FormMultipleInputs> */}
      {/* <ControlledComponent></ControlledComponent>
      <UncontrolledComponent></UncontrolledComponent> */}
      {/* <CounterWithUseReducer></CounterWithUseReducer> */}
      {/* <ProfileForm></ProfileForm> */}
      {/* <HookDashboard></HookDashboard> */}

      {/* Project FinanceTracker */}
      {/* <FinanceTracker></FinanceTracker> */}

      {/* Project Authentication */}
      <AuthenticationProject></AuthenticationProject>
    </>
  );
}
