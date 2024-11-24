import getLogo from "../../assets/images/get_logo.png";

const Footer = () => {
  return (
    <footer className="mb-4">
      <div className="al-footer-right">
        <img src={getLogo} style={{ height: "30px", width: "25px" }} />{" "}
        Copyright © 2024 GET Group. All Rights Reserved.
      </div>
      <div className="al-footer-main clearfix">
        <div className="al-copy"></div>
      </div>
    </footer>
  );
};

export default Footer;
