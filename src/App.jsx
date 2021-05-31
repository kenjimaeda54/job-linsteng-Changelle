import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstPage from './page/first-page';
import Role from './page/role';


export default function App(){
return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/filter" component={Role} />
      </Switch>
    </BrowserRouter>
  );
}
