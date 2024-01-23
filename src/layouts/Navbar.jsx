import IAUTSB_logo from "./../images/IAUTSB_logo.png";
import pngtree_pdf_file_icon_png_png_image_7965915 from "../images/pngtree-pdf-file-icon-png-png-image_7965915.png";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-white py-[10px] px-[20px]  min-h-[90px] mb-4">
      <div className="flex justify-between items-center">
        <div className="w-[5%] ">
          <img
            src={pngtree_pdf_file_icon_png_png_image_7965915}
            alt="pdf photo"
            height={50}
            width={50}
          />
        </div>
        <div className="font-bold italic text-3xl w-[85%] text-white">
          Website to PDF Converter
        </div>
        <div className="w-[10%] flex justify-center">
          <img src={IAUTSB_logo} alt="azad uni photo" height={40} width={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
