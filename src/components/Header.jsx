import './Header.css'


export default function Header({titulo}) {
    return (
        <div className='site-header'>
            <spam className='logo'>
                <img src='\src\assets\Logo Ballet Luxor.jpg.jpeg' alt='Logo Ballet Luxor' />
            </spam>
            <spam>
                <h1>{titulo}</h1>
            </spam>
        </div>
    )
}
