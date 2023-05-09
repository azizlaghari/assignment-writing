import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <header className="transparent-header">
                <div className="logo">
                    <span>Assignment Writing</span>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                        <li><a href="#">Link 5</a></li>
                        <div className="buttons">
                            <a href="#" className="button button-primary">Button 1</a>
                            <a href="#" className="button button-secondary">Button 2</a>
                        </div>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header;