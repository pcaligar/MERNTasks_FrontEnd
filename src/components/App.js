import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Login from "./auth/Login";
import NuevaCuenta from "./auth/NuevaCuenta";
import Proyectos from "./proyectos/Proyectos";
//States
import ProyectoState from "../context/proyectos/proyectoState";
import TaskState from "../context/tasks/taskState";
import AlertState from "../context/alert/alertState";

function App() {
  return (
    <ProyectoState>
      <TaskState>
        <AlertState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <Route exact path="/proyectos" component={Proyectos} />
            </Switch>
          </Router>
        </AlertState>
      </TaskState>
    </ProyectoState>
  );
}
export default App;
