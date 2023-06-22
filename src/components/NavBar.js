import React from 'react';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.583 0.62168L18.5 9.13695L23.417 0.62168C21.8345 0.20722 20.1955 -9.82811e-06 18.5 -9.82811e-06C16.8045 -9.82811e-06 15.1655 0.20722 13.583 0.62168ZM27.1848 14.1482H37C36.1146 10.889 34.4002 7.96893 32.1018 5.65172L27.1848 14.1482ZM0 14.1482H9.81517L4.89817 5.65172C2.5998 7.96893 0.885438 10.889 0 14.1482ZM27.1848 24.1706L32.1018 32.667C34.4002 30.3498 36.1146 27.4297 37 24.1706H27.1848ZM0 24.1706C0.885438 27.4297 2.5998 30.3498 4.89817 32.667L9.81517 24.1706H0ZM13.583 37.697C15.1655 38.1115 16.8045 38.3187 18.5 38.3187C20.1955 38.3187 21.8345 38.1115 23.417 37.697L18.5 29.1818L13.583 37.697Z" fill="white" />
                </svg>
                <img className="title-svg" src="title.svg" alt="Title" />
            </a>

            <span className="navbar-text ml-auto" style={{ position: 'absolute', right: '15px' }}>
                Employee Management
            </span>
        </nav>


    );

}



export default NavBar;