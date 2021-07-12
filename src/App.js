import React from 'react';
import ReactDOM from 'react-dom';

import MyForm from './form-validations/MyForm'
import MyInput from './form-validations/MyInput'

class App extends React.Component {
    render() {
       return (
           <div className="ui text container">
               <MyForm>
                   <MyInput label="Please Enter Name" name="name" placeholder="Your Name"/>
                   <MyInput label="Please Enter Age" name="age" placeholder="Your Age"/>
                   <MyInput label="Please Enter Address" name="address" placeholder="Your Address"/>
               </MyForm>
           </div>
       )
    }
}
export default App;