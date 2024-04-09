import cvLogo from '../assets/olli-the-polite-cat.jpg'

function Header() {
  return (
    <div className="header">
      <h1>CV Application</h1>
      <img src={cvLogo} alt="cat meme" />
    </div>
  )
}

export default Header;