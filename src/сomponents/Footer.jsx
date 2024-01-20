const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour > -openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We are Open! until {closeHour}:00. Come visit us order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
