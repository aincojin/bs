// import React, {useContext} from 'react';
// import {Routes, Route} from 'react-router-dom'
// import {authRoutes, publicRoutes} from "../routes";
// import {HOME_ROUTE} from "../utils/consts";
// import {Context} from "../index";
// import {observer} from "mobx-react-lite";

// const AppRouter = observer(() => {
// //     const {user} = useContext(Context)
// //     if (!user) return null;
// //  console.log(user)
// //     console.log(user)
// const isAuth = true

//     return (
//         <Routes>
        
//             {isAuth && authRoutes.map(({path, Component}) =>
            
//                 <Route key={path} path={path} element={Component} exact/>
//             )}
//             {publicRoutes.map(({path, Component}) =>
//                 <Route key={path} path={path} element={Component} exact/>
//             )}
//         </Routes>
//     );
// });

// export default AppRouter;