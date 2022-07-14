import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import UserDetail from './pages/userDetail';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact  component={Home}/>
            <Route path="/userdetail/:username" exact component={UserDetail} />
        </Switch>
    )
};
