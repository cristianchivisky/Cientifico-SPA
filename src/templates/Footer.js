import bootstrap from '../img/bootstrap.svg';
import webpack from '../img/webpack.svg';
import css from '../img/css.svg';
import html5 from '../img/html5.svg';
import javascript from '../img/javascript.svg';
import netlify from '../img/netlify.svg';

const Footer = () => {
    const view = `
    <div class="footer container-fluid d-flex flex-column mb-1 mt-3">
        <footer class="bg-body-tertiary text-center text-black">
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.1); border-radius: 5px;">
                © 2024 |
                <a class="text-black text-decoration-none" href="/">Científico-SPA</a>
                <div class="d-flex justify-content-center mt-2">
                    <img src="${webpack}" alt="Webpack" class="me-2" style="width: 20px; height: 20px;;">
                    <img src="${javascript}" alt="JavaScript" class="me-2" style="width: 20px; height: 20px;">
                    <img src="${html5}" alt="HTML 5" class="me-2" style="width: 20px; height: 20px;">
                    <img src="${css}" alt="CSS 3" class="me-2" style="width: 20px; height: 20px;">
                    <img src="${bootstrap}" alt="Bootstrap" class="me-2" style="width: 20px; height: 20px;">
                    <img src="${netlify}" alt="Netlify" style="width: 20px; height: 20px;">
                </div>

            </div>
        </footer>
    </div>
    `;
    return view;
};

export default Footer;
