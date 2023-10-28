import React from "react";
const Home = () => {
    return(
        
              <BrowserRouter>
              <LeftNav />
              <RightNav />
              <NavBar />
              <Home />
                <Switch>
                  <Route component={Home} path='/' exact />
                  <Route component={About} path='/about' />
                  <Route component={Project} path='/projects' />
                  <Route component={Contact} path='/contact' />
                </Switch>
              </BrowserRouter>
            )
          }
       
    

export default Home;