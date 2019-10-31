import Component from './components.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header class="header" class="grid">
            <div class="pokeman-image"></div>
            <div class="wrap">
                <h1>Choose Your <br> Pokemon</h1>
                <p></p>
            </div>
        </header>
        `;
    }
}

export default Header;