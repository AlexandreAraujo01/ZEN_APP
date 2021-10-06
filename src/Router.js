import React from "react";
import {HashRouter,Route} from 'react-router-dom'
import AddressForm from "./screens/AddressForm";
import MapModal from "./screens/MapModal";
import Search from "./screens/Search";

export default function Routes() {
    return(
        <HashRouter>
            <Route path='/'>
                <Search></Search>
            </Route>
            <Route path='/form'>
                <AddressForm></AddressForm>
            </Route>
            <Route path='/map'>
                <MapModal></MapModal>
            </Route>
        </HashRouter>
    )
}