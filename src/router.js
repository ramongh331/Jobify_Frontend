import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
// import Create from "./pages/Create"
import Home from "./pages/Home"
import App from "./App"
// import Index from "./pages/Index";
// import Show from "./pages/Show";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// import { indexLoader, showLoader } from "./loaders";
// import {createAction, updateAction, deleteAction} from "./actions"


  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="posts" element={<Index/>} loader={indexLoader}/>
        <Route path="posts/new" element={<Create/>}/>
        <Route path="posts/:id" element={<Show/>} loader={showLoader}/> */}
        {/* Action Routes */}
        {/* <Route path="posts/create" action={createAction}/>
        <Route path="posts/update/:id" action={updateAction}/>
        <Route path="posts/delete/:id" action={deleteAction}/> */}
      </Route>
    )
  );
  
  export default router