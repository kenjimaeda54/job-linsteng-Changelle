import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstPage from './page/first-page';
import FilterFister from './page/filters/first-filter';
import SecondFilter from './page/filters/second-filter';
import ThirdFilter from './page/filters/third-filter';

export default function App(){
return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/filter" component={FilterFister} />
        <Route exact path="/filter/second" component={SecondFilter} />
        <Route exact path="/filter/second/third" component={ThirdFilter} />
      </Switch>
    </BrowserRouter>
  );
}
