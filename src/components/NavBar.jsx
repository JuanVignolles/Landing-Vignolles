import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#eee" }}>
      <h1>RetroStore</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar