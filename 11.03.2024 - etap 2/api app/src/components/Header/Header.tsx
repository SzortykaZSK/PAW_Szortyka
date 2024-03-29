import './Header.style.scss';

interface HeaderProps{
    tableName: string
}

function Header({tableName}: HeaderProps) {

  return (
    <header>
        <h1>{tableName}</h1>
    </header>
  )
}

export default Header
