import logo from "../assets/investment-calculator-logo.png";

export function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <h1>Ivestiment Calculator</h1>
    </header>
  );
}
