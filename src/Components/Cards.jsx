import { memo } from "react";

  export default memo(function Cards({txt,customi}){
    console.log('render');
 

  customi()
  return (
    <div>
      <p>Carte</p>
      <p>{txt}</p>
    </div>
  )
  })