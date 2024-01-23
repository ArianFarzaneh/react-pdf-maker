import { Routes, Route } from "react-router-dom";
import MyDocument from "./components/MyDocument";
import { PDFViewer } from "@react-pdf/renderer";
import FirstPage from "./components/FirstPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route
          path="/PdfCreator"
          element={
            <PDFViewer>
              <MyDocument />
            </PDFViewer>
          }
        />
      </Routes>
    </>
  );
};

export default App;
