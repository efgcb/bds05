
import Navbar from "components/Navbar";
import Assentments from "pages/Movie";
import AssentmentsDetails from "pages/MovieDetails";
import Auth from "pages/Auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Routes = () =>  (

        <BrowserRouter >
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Auth/>
            </Route>           
            <Route path="/movies" exact>
                <Assentments/>
            </Route>
            <Route path="/movies/1">
                <AssentmentsDetails/>
            </Route>
        </Switch>
        
        </BrowserRouter>

    );


export default Routes;

