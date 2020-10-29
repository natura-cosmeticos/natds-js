import {registerApplication, start} from 'single-spa'
import {constructApplications, constructLayoutEngine, constructRoutes} from "single-spa-layout"

const routes = constructRoutes(document.querySelector('#single-spa-layout'));
const applications = constructApplications({
    routes,
    loadApp({name}) { System.import(name) }
})

const layoutEngine = constructLayoutEngine({
    routes,
    applications,
    active: false
})

applications.forEach(registerApplication)

layoutEngine.activate()
start()
