import React,{useState} from 'react';
import './AgeCalc.css';
import moment from 'moment';
const AgeCalc = () => {
    const [date,setDate] = useState('');
    const [year,setYear] = useState('-');
    const [month,setMonth] = useState('-');
    const [day,setDay] = useState('-');
    const [remaining_day,setRemaining_day] = useState('-');

    const months = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    let ageCal = (e) => {
        e.preventDefault();
        let today = new Date();
        let inputDate = new Date(date);
        let birthMonth,birthDate,birthYear,days; 
        let birthDetails = {
            dateb:inputDate.getDate(),
            monthb:inputDate.getMonth()+1,
            yearb:inputDate.getFullYear()
        }
        
        let currentYear = today.getFullYear();
        let currentMonth = today.getMonth()+1;
        let currentDate = today.getDate();
        
        leapYear(currentYear);

        if(date===''){
            alert("Please enter a valid date!")
            setYear('-');
            setMonth('-');
            setDay('-');
            return;
            
        }
         else if (
            birthDetails.yearb > currentYear ||
            ( birthDetails.monthb > currentMonth && birthDetails.yearb == currentYear) || 
            (birthDetails.dateb > currentDate && birthDetails.monthb == currentMonth && birthDetails.yearb == currentYear)
        ){
            alert("Not yet born");
            setYear('-');
            setMonth('-');
            setDay('-');
            return;
          
        }
       
        birthYear = currentYear - birthDetails.yearb;

        if(currentMonth >= birthDetails.monthb){
            birthMonth = currentMonth - birthDetails.monthb;
        }
        else{
            birthYear--;
            birthMonth = 12 + currentMonth - birthDetails.monthb;
        }
        if(currentDate >= birthDetails.dateb){
            birthDate = currentDate - birthDetails.dateb;
        }
        else{
            //console.log(currentDate,birthDetails.dateb)
            birthMonth--;
            days = months[currentMonth];
            console.log(days,currentDate,birthDetails.dateb,currentMonth);
            birthDate = days + currentDate - birthDetails.dateb;
            //console.log(birthDate)
            if(birthMonth < 0){
                birthMonth = 11;
                birthYear--;
            }
        }
        
        if (birthDetails.monthb === currentMonth && birthDetails.dateb === currentDate ){
            alert("Happy Birthday!")
        }
        setYear(birthYear);
        setMonth(birthMonth);
        setDay(birthDate);
        var tday= new Date();
        let bday =new Date(today.getFullYear(),birthDetails.monthb-1,birthDetails.dateb)
        if( tday.getTime()> bday.getTime()) {
            bday.setFullYear(bday.getFullYear()+1);
        }
        let diff = bday.getTime()-tday.getTime();
        let rmdays = Math.ceil(diff/(1000*60*60*24));
        setRemaining_day(rmdays)
    }

    function leapYear(year){
        if(year % 4 == 0 || (year % 100 == 0 && year% 400 == 0)){
            months[1] = 29;
           
        }
        else{
            months[1] = 28;
          
        }
    }
  return (
      <div className='ageapp'>
          <div className="agecontainer">
              <div className="inputs-wrapper">
                <form onSubmit={ageCal}>
                  <input type="date" id="date-input" value={date} onChange={(e) => setDate(e.target.value)}/>
                    <button type="submit">Calculate</button>
                </form>
              </div>
              <div className="outputs-wrapper">
                  <div className="ow">
                      <span id="years">
                          {year}
                      </span>
                      <p>
                          Years
                      </p>
                </div>
                <div className="ow">
                      <span id="months">
                          {month}
                      </span>
                      <p>
                          Months
                      </p>
                </div>
                <div className="ow">
                      <span id="days">
                          {day}
                      </span>
                      <p>
                          Days
                      </p>
                </div>
              </div>
              <div className='wish-for-birthday'>
              <div>
                    <span id="days">
                          {remaining_day}
                      </span>
                      <p>
                          Days to next Birthday!
                      </p>
                </div>
              </div>
          </div>
      </div>
  );
};


export default AgeCalc;
