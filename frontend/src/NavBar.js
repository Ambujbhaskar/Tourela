import './NavBar.css';

function NavBar() {

  return (
    <>
    <div id='navbar'>
      <div id='logotype'>
        Tourela
      </div>
      <div id='navButtons'>
        <button class='buttons' id='cta'>
          <div class='buttonText' id='ctaText'>
          Start Planning
          </div>
        </button>
        <button class='buttons' id='profileButton'></button>
      </div>
    </div>
    </>
  );
  
}

export default NavBar;