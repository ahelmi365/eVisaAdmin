import getLogo from "../../assets/images/get_logo.png";

const Footer = () => {
  return (
    <footer className="mb-2">
      <div className="al-footer-right">
        <img src={getLogo} style={{ height: "30px", width: "25px" }} />{" "}
        <span style={{fontSize:"0.9rem"}}>

        Copyright © 2024 GET Group. All Rights Reserved.
        </span>
      </div>
      <div className="al-footer-main clearfix">
        <div className="al-copy"></div>
      </div>
    </footer>
  );
};

export default Footer;
