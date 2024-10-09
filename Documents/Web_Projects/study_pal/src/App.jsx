import Navbar from './constants/Navbar'
import Footer from './constants/Footer'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Login from './constants/Login'
import History from './components/History'
import Courses from './components/Courses'
import BasicMath from './Courses/Mathematics/BasicMath'
import AppliedMath from './Courses/Mathematics/AppliedMath'
import DescriptiveStat from './Courses/Mathematics/DescriptiveStat'
import InferentialStat from './Courses/Mathematics/InferentialStat'
import BasicProgramming from './Courses/ProgrammingAndTech/BasicProgramming'
import DigitalMarket from './Courses/ProgrammingAndTech/DigitalMarket'
import DSAndML from './Courses/ProgrammingAndTech/DSAndML'
import GraphicDesign from './Courses/ProgrammingAndTech/GraphicDesign'
import MobileAppDev from './Courses/ProgrammingAndTech/MobileAppDev'
import VideoEdit from './Courses/ProgrammingAndTech/VideoEdit'
import WebDev from './Courses/ProgrammingAndTech/WebDev'
import Accounting from './Courses/SocialScience/Accounting'
import Law from './Courses/SocialScience/Law'
import Management from './Courses/SocialScience/Management'
import Communication from './Courses/SoftSkills/Communication'
import FinanceManage from './Courses/SoftSkills/FinanceManage'
import Psycology from './Courses/SoftSkills/Psycology'
import SalesAndManagement from './Courses/SoftSkills/SalesAndManagement'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='mx-5 my-3 flex flex-col gap-8'>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contacts/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/history' element = {<History/>}/>
        <Route path='/course' element = {<Courses/>}/>
        <Route path='/basicmath' element = {<BasicMath/>}/>
        <Route path='/applied' element = {<AppliedMath/>}/>
        <Route path='/descript' element = {<DescriptiveStat/>}/>
        <Route path='/inference' element = {<InferentialStat/>}/>
        <Route path='/basicprog' element = {<BasicProgramming/>}/>
        <Route path='/digital' element = {<DigitalMarket/>}/>
        <Route path='/dsAndML' element = {<DSAndML/>}/>
        <Route path='/graphic' element = {<GraphicDesign/>}/>
        <Route path='/mobileApp' element = {<MobileAppDev/>}/>
        <Route path='/videoedit' element = {<VideoEdit/>}/>
        <Route path='/webdev' element = {<WebDev/>}/>
        <Route path='/account' element = {<Accounting/>}/>
        <Route path='/law' element = {<Law/>}/>
        <Route path='/manage' element = {<Management/>}/>
        <Route path='/communicate' element = {<Communication/>}/>
        <Route path='/finance' element = {<FinanceManage/>}/>
        <Route path='/psycology' element = {<Psycology/>}/>
        <Route path='/sales' element = {<SalesAndManagement/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App