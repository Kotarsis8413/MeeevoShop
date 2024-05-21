const appM = document.getElementById("info");
const root = ReactDOM.createRoot(appM);

const pages = {
    mainpage: (
        <div>
            <h2 className="center">Главная</h2>
            <div className="itempool">
                <div className="item">
                        <img src="assets/imgs/dvushka.png" className="m22"/>
                        <h3 className="m22">Двушка</h3>
                        <div className="m22"><h2>750₽</h2><button className="cartbtn">В корзину</button></div>
                </div>
                <div className="item">
                        <img src="assets/imgs/tomik.png" className="m22"/>
                        <h3 className="m22">Томик</h3>
                        <div className="m22"><h2>750₽</h2><button className="cartbtn">В корзину</button></div>
                </div>
            </div>
        </div>
    )
}

root.render(pages.mainpage);

function changePage(page) {
    switch (page) {
        case 'mainpage':
            root.render(pages.mainpage);
            break;
        default:
            root.render(<h2>RENDER ERROR</h2>);
            break;
    }
}