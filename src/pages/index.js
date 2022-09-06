import * as React from "react"
import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'

import BasicLayaut from "../layouts/BasicLayout"

const IndexPage = () => (
  <BasicLayaut>
       <Profile />
       <AboutMe />
   
  </BasicLayaut>
)


export default IndexPage
