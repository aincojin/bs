import Admin from "./pages/Admin"
import CatalogueNew from "./pages/catalogue/catalogue"
import CatalogueFil from "./pages/catalogue/catalogue-fil"
import About from "./pages/home/About"
import Home from "./pages/home/Home"
import LogInForm from "./pages/sign-up/LogInForm"
import SignUpForm from "./pages/sign-up/SignUpForm"


import { ABOUT_ROUTE, ADMIN_ROUTE, CATALOGUE_ROUTE, GENRES_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "./utils/consts"

export const authRoutes =[
    {
        path: ADMIN_ROUTE,
        component: Admin
    }
    
]

export const publicRoutes =[
    {
        path: CATALOGUE_ROUTE,
        component: CatalogueFil
    },
    {
        path: HOME_ROUTE,
        component: Home
    },
    {
        path: LOGIN_ROUTE,
        component: LogInForm
    },
    {
        path: SIGNUP_ROUTE,
        component: SignUpForm
    },
    {
        path: ABOUT_ROUTE,
        component: About
    },
    {
        path: GENRES_ROUTE,
        component: CatalogueNew
    }
]