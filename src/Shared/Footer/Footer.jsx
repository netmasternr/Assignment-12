import { Footer } from "flowbite-react";
import logo from '../../assets/logo/primecare-high-resolution-logo-transparent.png'

const Foot = () => {
    return (
        <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-5 text-xl text-orange-400 font-semibold">
              <img src={logo} alt="" className="w-16"/>
              <h1>PrimeCare</h1>
            </div>
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="PrimeCare" year={2024} />
        </div>
      </Footer>
    );
};

export default Foot;