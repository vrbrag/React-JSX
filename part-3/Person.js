function Person(props) {
   let ageText = (props.age >= 18) ? <h3>Please go vote!</h3> : <h3>You must be 18.</h3>
   let nameSlice = props.name.slice(0, 6)
   let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)
   return (
      <div>
         <p>Learn some information about this person:
            <ul>
               <li>
                  Name: {nameSlice}
               </li>
               <li>
                  Age: {props.age}
               </li>
               Hobbies: <ul>{hobbies}</ul>
            </ul>
            {ageText}
         </p>
      </div>


   )

}

