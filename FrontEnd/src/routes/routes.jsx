import Add from "../pages/admin/Add/Add";
import AdminRoot from "../pages/admin/AdminRoot";
import Products from "../pages/admin/Products/Products";
import Basket from "../pages/site/Basket/Basket";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import Wishlist from "../pages/site/Wishlist/Wishlist";

const ROUTES=[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },
            {
                path:"/wishlist",
                element:<Wishlist/>
            },
            {
                path:`detail/:id`,
                element:<Detail/>
            }
        ]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"",
                element:<Products/>
            },
            {
                path:"add",
                element:<Add/>
            }
        ]
    }
]

export default ROUTES