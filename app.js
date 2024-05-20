const appM = document.getElementById("info");
const root = ReactDOM.createRoot(appM);

const pages = {
    mainpage: (
        <div>
            <h2 className="center">Главная</h2>
            <itemPool>
                <div className="item">
                    <div className="m10">
                        <img src="assets/imgs/dvushka.jpg"></img>
                        <h3>Двушка</h3>
                        <h2>500₽</h2>
                    </div>
                </div>
            </itemPool>
        </div>
    )
}

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