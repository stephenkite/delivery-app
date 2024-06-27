import { useState } from "react";

function State() {
    const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="pl-20 pt-10">
        <div className=''>Email</div>
        <input placeholder="Enter your Email" type="email" className="border border-black rounded-sm" />

    </div>
  )
}

export default State
