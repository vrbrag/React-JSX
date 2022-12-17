const App = () => (
   <div>
      <Tweet username="user1" name="Joe" date="1/2/2022" message="HELLO!!" />
      <Tweet username="user29" name="Mary" date="12/12/2022" message="Let's go to the beach!" />
      <Tweet username="user88" name="Carl" date="9/10/2022" message="Engaged! 💍" />
   </div>
)

ReactDOM.render(<App />, document.getElementById("root"));