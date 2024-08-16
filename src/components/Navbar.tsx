import PortButtom from "./PortButtom/PortButtom";
import PDF from "../../public/CV.pdf";

const Navbar = () => {
  return (
    <div className="sticky w-full bg-transparent z-50 py-4">
      <div className="w-10/12 mx-auto flex items-center">
        <div className="w-3/12 flex items-center">
          <LogoText />
        </div>

        <div className="w-6/12 md:flex justify-center items-center gap-16 hidden sm:flex">
          <ButtomsCenter />
        </div>

        <div className="w-3/12 hidden md:flex justify-end items-center">
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
      <ButtomCenter title="About" />
      <ButtomCenter title="Contact" />
      <ButtomCenter title="Projects" />
    </>
  );
};

const ButtomCenter = ({ title, to }: { title: string; to?: string }) => (
  <a
    href={to ? to : ""}
    className="text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-400"
  >
    {title}
  </a>
);

const downloadPDF = async () => {
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