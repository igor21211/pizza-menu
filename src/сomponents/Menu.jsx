import Card from "./Card";

const Menu = ({ pizza }) => {
  return (
    <main className="menu">
      {pizza.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <h2>Our menu</h2>
          <ul className="pizzas">
            {pizza.map((p) => (
              <Card {...p} key={p.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
