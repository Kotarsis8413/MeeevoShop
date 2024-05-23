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
                        <div className="m22"><h2>649₽</h2><button className="cartbtn" onClick={addToCart(1)}>В корзину</button></div>
                </div>
                <div className="item">
                        <img src="assets/imgs/tomik.png" className="m22"/>
                        <h3 className="m22">Томик</h3>
                        <div className="m22"><h2>749₽</h2><button className="cartbtn" onClick={addToCart(2)}>В корзину</button></div>
                </div>
                <div className="item">
                        <img src="assets/imgs/kalash.png" className="m22"/>
                        <h3 className="m22">Калаш</h3>
                        <div className="m22"><h2>999₽</h2><button className="cartbtn" onClick={addToCart(3)}>В корзину</button></div>
                </div>
                <div className="item">
                        <img src="assets/imgs/sochel.png" className="m22"/>
                        <h3 className="m22">Сочель</h3>
                        <div className="m22"><h2>649₽</h2><button className="cartbtn" onClick={addToCart(4)}>В корзину</button></div>
                </div>
                <div className="item">
                        <img src="assets/imgs/sishka.png" className="m22"/>
                        <h3 className="m22">Сишка</h3>
                        <div className="m22"><h2>949₽</h2><button className="cartbtn" onClick={addToCart(5)}>В корзину</button></div>
                </div>
            </div>
        </div>
    ),
    cart: (
        <div>
            <h2 className="center">Корзина</h2>
            
        </div>
    )
}

root.render(pages.mainpage);

function changePage(page) {
    switch (page) {
        case 'mainpage':
            root.render(pages.mainpage);
            break;
        case 'cart':
            alert("GitHub Pages не поддерживает серверные скрипты, поэтому весь backend перенесён на другой хостинг");
            window.location = "http://meeevogrup.temp.swtest.ru/MeeevoShop/cart/";
            break;
        default:
            root.render(<h2>RENDER ERROR</h2>);
            break;
    }
}

function addToCart(item) {
    var name = prompt("Введите имя пользователя (если вы ещё не зарегистрировались перейдите в корзину)");
    var pass = prompt("Введите ваш пароль");
    alert("GitHub Pages не поддерживает серверные скрипты, поэтому весь backend перенесён на другой хостинг");

    if (item != 1 || item != 2 ||item != 3 ||item != 4 ||item != 5) {

    }
    else {
        window.location = `http://meeevogrup.temp.swtest.ru/MeeevoShop/cart/api?name=${name}&pass=${pass}&item=${item}`;
    }
}