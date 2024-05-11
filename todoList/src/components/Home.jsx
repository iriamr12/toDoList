import React, {useState} from 'react'
import Title from './Title'
import SideBar from './SideBar'
import Month from './Month'
import Today from './Today/Today'
import ForTomorrow from './DueTomorrow/ForTomorrow'
import Week from './Week/Week'


const Home = () => {

    const [selectedComponent, setSelectedComponent] = useState('ForTomorrow')

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'ForTomorrow':
                return <ForTomorrow />
            case 'Today':
                return <Today />
            case 'Week':
                return <Week />
            // case 'Month':
            //     return <Month />
            default:
                return null;
    }
};

  return (
    <div className='grid grid-cols-5 grid-rows-10 h-screen p-4 gap-4'>
        <div className='col-start-1 col-end-5'>
            <Title />
        </div>
        
        <div className='col-start-1 col-end-2 row-span-10 overflow-y-auto '>
        <SideBar  setComponent={setSelectedComponent}/>
        </div>
        <div className='col-start-2 col-end-6 row-span-10 '>
            {renderComponent()}  
        </div>

</div>
  )
}

export default Home