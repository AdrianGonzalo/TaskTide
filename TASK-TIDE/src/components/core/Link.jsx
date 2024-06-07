import './Link.css'

function Link ({className, onClick, children}) {
    return <a href='' className={className} onClick={onClick}>{children}</a>
}

export default Link