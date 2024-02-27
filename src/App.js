import logo from './logo.svg';
import './App.css';
import SideBar from './constants/SideBar';
import TextInput from './components/InputField/TextInput';
import Coupons from './components/Cards/Coupons';
import OutlineButton from './components/Buttons/OutlineButton';
import Button from './components/Buttons/Button';
import PickDropLocation from './components/Locations/PickDropLocation';
import LocationInput from './components/InputField/LocationInput';
import QuickBookingLocation from './components/QuickBookings/QuickBookingLocation';
import UpcomingTrips from './components/QuickBookings/UpcomingTrips';


function App() {

  return (
    <div className="flex flex-row App w-full">
      <div className='flex w-full bg-[#E8E9EB]'>

        <div className='bg-[#E8E9EB] w-1/12 '>

        </div>

        <div className='w-11/12 flex'>

          <div className='bg-[#E8E9EB] w-full p-2 '>

            <div className='bg-white rounded-xl w-96 h-96 p-4  '>
              <div className='w-56'>
                <TextInput label='Caller Name' value='Ramesh Reddy' /></div>

                <div className='bg-[#E8E9EB] w-fit h-fit p-3 rounded-xl'>
               <QuickBookingLocation />
                </div>

                <div className='m-5'><UpcomingTrips price={'9000'} phoneStyle={'hidden'} active={'true'} edit={'Book Ambulance'}/></div>
            </div>

            <div className='bg-[#E8E9EB]  p-10'><Coupons value='10' fromcolor='green-700' tocolor='violet-600' price={'7200'} validDate={'20 September 2024'} discount='10' />
            </div>
            <div><OutlineButton label={'Assign driver'} /></div>

          </div>

          <div className='bg-white w-3/12 '>
            <SideBar />
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
