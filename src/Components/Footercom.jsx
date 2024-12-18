import React from 'react'

function Footercom() {
    const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer bg-black text-warning py-3">
        <div className="container text-center">
          <span>&copy; {currentYear}  All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
 


export default Footercom