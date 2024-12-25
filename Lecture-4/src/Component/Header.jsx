import './../CSS/Header.css'

export default function Header() {
  return (
    <>
      <nav className="nav">
        <img src="\src\assets\react-logo.png" alt="React Logo"/>
        <ul className='nav-itens'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
