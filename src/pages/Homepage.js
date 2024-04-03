import React, { useState } from "react";
import "../styles/homepage.scss";
import {
  Navbar,
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Dropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logoNavbar from "../assets/logo/logo-sweetshop.png";

const Homepage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <Row style={{ padding: "1rem", marginLeft: "50px" }}>
        <Col md={2}>
          <img src={logoNavbar} width={50} height={40} style={{marginLeft:"5rem"}} />
        </Col>
        <Col md={6}>
          <div className='search-box'>
            <InputGroup>
              <Form.Control className='form-input' placeholder='Search...' />
              <IoSearch className='icon-search' />
            </InputGroup>
          </div>
        </Col>
        <Col md={4}>
          <div className='icon-navright'>
            <IoPersonOutline
              style={{ marginRight: "10px", width: "20px", height: "50px" }}
            />
            <MdFavoriteBorder
              style={{ marginRight: "10px", width: "20px", height: "50px" }}
            />
            <HiOutlineShoppingBag
              style={{ marginRight: "10px", width: "20px", height: "50px" }}
            />
          </div>
        </Col>
      </Row>

      {/* Row kedua */}
      <Row className='row-menu' style={{ padding: "10px" }}>
        <Col
          md={2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Candy{" "}
          <MdKeyboardArrowDown
            style={{ verticalAlign: "middle", marginBottom: "3px" }}
          />
        </Col>
        <Col md={2}>
          Chocolate Bars{" "}
          <MdKeyboardArrowDown
            style={{ verticalAlign: "middle", marginBottom: "3px" }}
          />
        </Col>
        <Col md={2}>
          Diet Sweets{" "}
          <MdKeyboardArrowDown
            style={{ verticalAlign: "middle", marginBottom: "3px" }}
          />
        </Col>
        <Col md={2}>
          Gift Sweets{" "}
          <MdKeyboardArrowDown
            style={{ verticalAlign: "middle", marginBottom: "3px" }}
          />
        </Col>
        <Col md={2}>
          About Us{" "}
          <MdKeyboardArrowDown
            style={{ verticalAlign: "middle", marginBottom: "3px" }}
          />
        </Col>
      </Row>
      <div class='horizontal-line'></div>
    </div>
  );
};

export default Homepage;
