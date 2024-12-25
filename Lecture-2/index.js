function LiTags(){
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
      <LiTags />
   </div>
   ,document.getElementById("root")
)

