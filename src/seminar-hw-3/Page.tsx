import React from "react";
import Header from "./header/Header.tsx";
import ProductList from "./product_list/ProductList.tsx";
import Footer from "./footer/Footer.tsx";

const Page: React.FC = () => {
    return (
        <div>
            <Header name="-----------МегаМагазин-----------"></Header>
            <ProductList items={[["Молоток", "200р."], ["Дрель", "999р."]]}></ProductList>
            <Footer email="brokamp@mail.ru" phone="88005553535"></Footer>
        </div>
    )
}

export default Page;