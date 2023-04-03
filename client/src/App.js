import{BrowserRouter,Routes,Route} from"react-router-dom"
import Home from"./components/Home/Home"
import Category from"./components/Category/Category"
import SingleProduct from"./components/SingleProduct/SingleProduct"
import Header from"./components/Header/Header"
import Footer from"./components/Footer/Footer"
import Newletter from"./components/Footer/Newsletter/Newsletter"
import AppContext from "./Utils/context"

function App() {
    return (
<BrowserRouter>
<AppContext>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/category/:id" element={<Category/>}/>
<Route path="/product/:id" element={<SingleProduct/>}/>
</Routes>
<Newletter/>
<Footer/>
</AppContext>
</BrowserRouter>  
    )  
}  ;


export default App;
