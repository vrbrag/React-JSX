function Tweet({ username, name, date, message }) {

   return (
      <ul>
         <li>{username}</li>
         <li>{name}</li>
         <li>{date}</li>
         <li>{message}</li>
      </ul>
   )
}