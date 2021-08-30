import MainPage from "../components/MainPage"
import Contact from "../components/Contact"
import NotFound from "../components/NotFound"



export const mainroutes =[
    {
        path:"/",
        name:"anasayfa",
        component:MainPage
    },
    {
        path:"/home",
        name:"home",
        redirect:"/"
    },
    {
        path:"/contact",
        name:"contact",
        component:Contact
    },
    {
        path:"*",
        component:NotFound
    }
];