import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../components/Home/Home'
import HoverCard from '../components/HoverCard/HoverCard'
import CircleHover from '../components/CircleHover/CircleHover'
import CardLayred from '../components/CardLayred/CardLayred'

export class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hover_card" component={HoverCard} />
            <Route path="/circle_hover" component={CircleHover} />
            <Route path="/card_layerd" component={CardLayred} />

        </Switch>
      </div>
    )
  }
}

export default Routes
