const App = () => (
   <div>
      <Person
         name="Amber"
         age={22}
         hobbies={["cars", "blogging", "sleeping"]} />
      <Person
         name="Jonathan"
         age={12}
         hobbies={["airplanes", "skateboarding", "mowing the lawn"]} />
      <Person
         name="Bobby"
         age={18}
         hobbies={["rubiks cubes", "eating churros", "gardening"]} />
   </div>
)

ReactDOM.render(<App />, document.getElementById("root"));