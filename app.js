const appM = document.getElementById("info");
const root = ReactDOM.createRoot(appM);

const pages = {
    mainpage: (
        <div>
            <h2 className="center">Главная</h2>
            <div className="itempool">
                <div className="item">
                        <img src="assets/imgs/dvushka.jpg" className="m22"></img>
                        <h3 className="m22">Двушка</h3>
                        <h2 className="m22">500₽</h2>
                        <button className="m22">В корзину</button>
                </div>
                <div className="item">
                        <img src="https://rustlabs.com/img/items180/smg.thompson.png" className="m22"></img>
                        <h3 className="m22">Томик</h3>
                        <h2 className="m22">750₽</h2>
                        <button className="m22">В корзину</button>
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