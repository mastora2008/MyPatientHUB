import "./FindMarketPlace.css";

export default function FindMarketPlace() {

    const products = [
        {
            id: 1,
            name: "Healthy Diet",
            price: "5 RM",
            company: "Food Panda",
            image: "/assets/healthy-diet.jpg",
            description:
                "As Uber works through a huge amount of internal management turmoil."
        },
        {
            id: 2,
            name: "Healthy Diet",
            price: "10 RM",
            company: "Grab Food",
            image: "/assets/healthy-diet.jpg",
            description:
                "Music is something that every person has his or her that every person has his or"
        },
        {
            id: 3,
            name: "Healthy Diet",
            price: "15 RM",
            company: "Deliveroo",
            image: "/assets/healthy-diet.jpg",
            description:
                "Different people have different taste, and various types of music."
        },
        {
            id: 4,
            name: "Healthy Diet",
            price: "20 RM",
            company: "Minimalist",
            image: "/assets/healthy-diet.jpg",
            description:
                "Different people have different taste, and various types of music."
        }
    ];


    const tableData = [
        {
            id: "243598234",
            discount: "0",
            price: "10 RM",
            company: "Food panda",
            logo: "/assets/foodpanda.jpg"
        },
        {
            id: "877712",
            discount: "5",
            price: "9 RM",
            company: "Grab Food",
            logo: "/assets/foodpanda.jpg"
        },
        {
            id: "0134729",
            discount: "9",
            price: "25 RM",
            company: "Deliveroo",
            logo: "/assets/foodpanda.jpg"
        },
        {
            id: "113213",
            discount: "5",
            price: "15 RM",
            company: "Food Panda",
            logo: "/assets/foodpanda.jpg"
        },
        {
            id: "634729",
            discount: "7",
            price: "25 RM",
            company: "Food Panda",
            logo: "/assets/foodpanda.jpg"
        },
        {
            id: "634729",
            discount: "0",
            price: "20 RM",
            company: "Food Panda",
            logo: "/assets/foodpanda.jpg"
        }
    ];


    return (
        <div className="marketplace-page">


            {/* FIRST WHITE BOX */}

            <section className="marketplace-card">

                <h1>
                    Search Marketplaces and order what you need
                </h1>


                <div className="products-container">

                    {products.map((product) => (

                        <div
                            className="product-card"
                            key={product.id}
                        >

                            <img
                                className="food-image"
                                src={product.image}
                                alt="Healthy Diet"
                            />


                            <div className="product-name-price">

                                <span>
                                    {product.name}
                                </span>

                                <span className="product-price">
                                    {product.price}
                                </span>

                            </div>


                            <div className="company">

                                <img
                                    src={product.image}
                                    alt={product.company}
                                    className="company-logo"
                                />

                                <span>
                                    {product.company}
                                </span>

                            </div>


                            <p className="product-description">
                                {product.description}
                            </p>


                            <button className="buy-button">
                                BUY NOW
                            </button>

                        </div>

                    ))}

                </div>

            </section>


            {/* SECOND WHITE BOX */}

            <section className="results-section">

                <h1>
                    Other results for healthy diet search
                </h1>


                <div className="table-top">

                    <div className="entries">

                        <select>

                            <option>7</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>

                        </select>

                        <span>
                            entries per page
                        </span>

                    </div>


                    <input
                        className="table-search"
                        type="text"
                        placeholder="Search..."
                    />

                </div>


                <div className="table-container">

                    <table>

                        <thead>

                            <tr>

                                <th>
                                    NAME <span>↕</span>
                                </th>

                                <th>
                                    CATEGORY
                                </th>

                                <th>
                                    SERVICE BY <span>↕</span>
                                </th>

                                <th>
                                    DISCOUNT
                                </th>

                                <th>
                                    PRICE <span>↕</span>
                                </th>

                                <th>
                                    ID <span>↕</span>
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {tableData.map((item, index) => (

                                <tr key={index}>

                                    <td>

                                        <div className="name-cell">

                                            <img
                                                src="/assets/healthy-diet.jpg"
                                                alt="Healthy Diet"
                                            />

                                            <span>
                                                Healthy Diet
                                            </span>

                                        </div>

                                    </td>


                                    <td>
                                        Food
                                    </td>


                                    <td>

                                        <div className="service-cell">

                                            <img
                                                src={item.logo}
                                                alt={item.company}
                                            />

                                            <span>
                                                {item.company}
                                            </span>

                                        </div>

                                    </td>


                                    <td>
                                        {item.discount}
                                    </td>


                                    <td>
                                        {item.price}
                                    </td>


                                    <td>
                                        {item.id}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                <div className="table-footer">
                    Showing 1 to 6 of 6 entries
                </div>

            </section>

            {/* Footer */}
            
            <footer>
              
              <p>
                 © 2026, made with &hearts; by<strong> MyPatientHUB</strong> for a better web.
              </p>
              
              <div>
                <a>MyPatientHUB</a>
                <a>About Us</a>
                <a>Blog</a>
                </div>
                
              </footer>

        </div>
    );
}