import ExcelJS from "exceljs";

// const workbook = new ExcelJS.Workbook();

// workbook.xlsx
//   .readFile("https://1drv.ms/x/s!AhKKtEOzNaefkn-SBTQe9jVSGmIg?e=glBGyJ")
//   .then(function () {
//     console.log("first");
//     const worksheet = workbook.getWorksheet("BOD-VLO.");
//     worksheet.getCell("A1").value = "Nuevo valor";
//     return workbook.xlsx.writeFile(
//       "https://1drv.ms/x/s!AhKKtEOzNaefkn-SBTQe9jVSGmIg?e=glBGyJ"
//     );
//   })
//   .then(function () {
//     console.log("Archivo modificado con éxito");
// 	});

export default function Home() {
  const wdHideGridlines = "wdHideGridlines=True";
  const wdHideHeaders = "wdHideHeaders=True";
  const wdHideSheetTabs = "wdHideSheetTabs=True";
  const wdAllowInteractivity = "wdAllowInteractivity=True";
  const allowTyping = "AllowTyping=False";
  const itemtoShow = "Item=cierreVuelos";
  const wdbipreview = "wdbipreview=False";
  const excelSrc = `https://onedrive.live.com/embed?resid=9FA735B343B48A12%212431&authkey=%21AJqJWmtPHa8CBCo&em=2&ActiveCell='BOD-VLO.'!B10&wdInConfigurator=True&edesNext=false&resen=true&ed1JS=false&${wdHideGridlines}&${wdHideHeaders}&${wdHideSheetTabs}&${itemtoShow}&${wdAllowInteractivity}&${allowTyping}&${wdbipreview}`;
  // excelSrc.concat("&action=embedview"); //para presentar el libro como un libro incrustado
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Resumen de vuelos</h1>
      <div style={{ padding: 30 }}>
        <iframe
          style={{ width: "100%", height: "470px" }}
          src={excelSrc}
        ></iframe>
      </div>
    </div>
  );
}
