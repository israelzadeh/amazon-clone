import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useStateValue } from "../../utils/StateProvider";
import { auth } from "../../utils/firebase";
import "./style.css";
import { Button, Form, Nav, Navbar, FormControl } from "react-bootstrap";

const navLinkStyle =
  "p-3 font-weight-bold text-white m-auto d-flex flex-column";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    auth.signOut();
  };

  return (
    <Navbar
      className="sticky-top"
      style={{ backgroundColor: "#131921" }}
      collapseOnSelect
      expand="md"
      variant="dark"
    >
      <Navbar.Brand as={Link} to="/">
        <img
          className="logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Form inline className="col">
          <FormControl type="text" placeholder="Search" className="col" />
          <Button
            style={{
              backgroundColor: "#cd9042",
              border: "#cd9042",
              color: "black",
            }}
          >
            <SearchIcon />
          </Button>
        </Form>

        <Nav>
          <div className="m-auto" onClick={handleAuthentication}>
            <Nav.Link className={navLinkStyle} as={Link} to={!user && "/login"}>
              <small>Hello {user?.email}</small>{" "}
              <span className="m-auto">{user ? "Sign Out" : "Sign In"}</span>
            </Nav.Link>
          </div>
          <Nav.Link className={navLinkStyle} as={Link} to="/orders">
            {" "}
            <small>Returns &</small>Orders
          </Nav.Link>
          <Nav.Link className={navLinkStyle} as={Link} to="/">
            <small>Your</small>Prime
          </Nav.Link>
          <Nav.Link className={navLinkStyle} as={Link} to="/checkout">
            <div>
              Basket
              <ShoppingCartIcon fontSize="large" />
              <span style={{ color: "#E28F35" }}>{basket?.length}</span>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
