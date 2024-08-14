import PortButtom from "./PortButtom/PortButtom";
import PDF from "../../public/CV.pdf";

const Navbar = () => {
  return (
    <div className="sticky  w-full  bg-transparent  z-50 py-4">
      <div className="w-10/12 mx-auto flex items-center ">
        <div className="w-3/12 flex items-center">
          <LogoText />
        </div>

        <div className="w-6/12 flex justify-center items-center gap-16">
          <ButtomsCenter />
        </div>

        <div className="w-3/12 flex justify-end items-center">
          <div className="w-32">
            <PortButtom title="Resume" callback={downloadPDF} />
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoText = () => (
  <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
    enmarcm
  </p>
);

const ButtomsCenter = () => {
  return (
    <>
      <a href="" className="text-lg font-semibold">
        About
      </a>
      <a href="" className="text-lg font-semibold">
        Contact
      </a>
      <a href="" className="text-lg font-semibold">
        Projects
      </a>
    </>
  );
};

const downloadPDF = async () => {
  // const pdfPath = "../../public/CV.pdf";
  const pdfPath = PDF;
  const response = await fetch(pdfPath);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "CV Enmanuel Colina.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export default Navbar;
