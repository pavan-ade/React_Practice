function ListTags(){
   return (
      <div>
         <ul>
            <li>apple</li>
            <li>Banana</li>
            <li>Lemmon</li>
            <li>Orange</li>
         </ul>
      </div>
   )
}

ReactDOM.render(
   <div>    
      <h1>Friutes</h1>
      <ListTags />
   </div>
   ,document.getElementById("root")
)


