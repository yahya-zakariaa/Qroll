import { useState } from 'react';

export default function Takeactionadmin() {
    const [value, setValue] = useState(50);
    const [selectedOption, setSelectedOption] = useState('option1');
    const handleChange = (e) => {
        let val = parseInt(e.target.value);
        if (isNaN(val)) val = 0;
        if (val > 100) val = 100;
        if (val < 0) val = 0;
        setValue(val);
      };
  return (
       <div>
<div className='m-7 max-sm:m-5 '>
           <h1 className='text-[#71717A] text-xl'> take an action  </h1>
     
           </div>

           <div className='w-[100%]'>
            <div className='w-[80%] mb-6  max-sm:w-[90%]' >
           <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 "> absence percentage </label>
            <input  type="number"
          min="0"
          max="100"
          value={value}
          onChange={handleChange} id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   placeholder="%" required />
              
            </div>
            <div className='w-[80%] mb-6 flex gap-[2%]  max-sm:w-[90%]'>
      
      {/* الخيار الأول */}
      <div
        className={`flex items-center border  ps-4 w-[49%] rounded-[12px]
          ${selectedOption === 'option1' ? 'border-gray-400' : 'border-gray-200'}`}
      >
        <input
          id="bordered-radio-1"
          type="radio"
          value="option1"
          name="bordered-radio"
          checked={selectedOption === 'option1'}
          onChange={() => setSelectedOption('option1')}
          className="w-4 h-4 text-[#9FA6B2] bg-gray-100 border-gray-300 "
        />
        <label
          htmlFor="bordered-radio-1"
          className={`w-full py-4 text-sm font-medium ms-2 
            ${selectedOption === 'option1' ? 'text-[#161B39]' : 'text-[#9FA6B2]'}`}
        >
          Default radio
        </label>
      </div>

      {/* الخيار الثاني */}
      <div
        className={`flex items-center border rounded-[12px] ps-4 w-[49%] 
          ${selectedOption === 'option2' ? 'border-gray-400' : 'border-gray-200'}`}
      >
        <input
          id="bordered-radio-2"
          type="radio"
          value="option2"
          name="bordered-radio"
          checked={selectedOption === 'option2'}
          onChange={() => setSelectedOption('option2')}
          className="w-4 h-4 text-[#9FA6B2] bg-gray-100 border-gray-300 focus:ring-red-500"
        />
        <label
          htmlFor="bordered-radio-2"
          className={`w-full py-4 text-sm font-medium ms-2 
            ${selectedOption === 'option2' ? 'text-[#161B39]' : 'text-[#9FA6B2]'}`}
        >
          Checked state
        </label>
      </div>
    </div>

    <div className='w-[80%] mb-6  max-sm:w-[90%]'  >
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">message</label>
    <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="|" />
    </div>
          
          <div className='mb-10 flex justify-center w-[80%]'>
            <button className='bg-[#161B39] text-[#FFFFFF] w-60 h-12 rounded-[10px]'> send messsage </button>
          </div>
           </div>

       </div>
  )
}
