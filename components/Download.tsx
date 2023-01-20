import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { currencyFormat } from "@/plugins/currency";

const Download = ({ ...props }) => {
  function download() {
    const doc = new jsPDF();

    let tempArr = [];
    let dataPdf = [];
    let excludeList = [
      "id",
      "thumbnail",
      "images",
      "discountPercentage",
      "rating",
    ];
    let headerPdf = [
      "Title",
      "Description",
      "Price",
      "Stock",
      "Brand",
      "Category",
    ];

    if (props.type === "list") tempArr = props.data;
    else tempArr.push(props.data);

    for (let i = 0; i < tempArr.length; i++) {
      let keys = Object.keys(tempArr[i]);
      let temp: any = [];

      for (let x = 0; x < keys.length; x++) {
        if (excludeList.includes(keys[x]) === false)
          if (keys[x] === "price")
            temp.push(currencyFormat(tempArr[i][keys[x]]));
          else temp.push(tempArr[i][keys[x]]);
      }

      dataPdf.push(temp);
    }

    try {
      autoTable(doc, {
        head: [headerPdf],
        body: dataPdf,
        theme: "grid",
      });

      doc.output("dataurlnewwindow", { filename: "Data Product" });
    } catch (error) {
      console.error("error : ", error);
    }
  }

  return (
    <div className="flex items-end justify-end">
      <div
        onClick={download}
        className="flex flex-row gap-3 rounded text-white bg-emerald-500 hover:bg-emerald-600 cursor-pointer w-fit h-fit p-3 m-3"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 4V13.5858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929C16.3166 10.9024 15.6834 10.9024 15.2929 11.2929L13 13.5858V4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4ZM16 8.2H19V18.8H5V8.2H8C8.55228 8.2 9 7.70751 9 7.1C9 6.49249 8.55228 6 8 6H4C3.44772 6 3 6.49249 3 7.1V19.9C3 20.5075 3.44772 21 4 21H20C20.5523 21 21 20.5075 21 19.9V7.1C21 6.49249 20.5523 6 20 6H16C15.4477 6 15 6.49249 15 7.1C15 7.70751 15.4477 8.2 16 8.2Z"
            fill="#F86821"
          />
          <mask
            id="mask0_271_15408"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 4V13.5858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929C16.3166 10.9024 15.6834 10.9024 15.2929 11.2929L13 13.5858V4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4ZM16 8.2H19V18.8H5V8.2H8C8.55228 8.2 9 7.70751 9 7.1C9 6.49249 8.55228 6 8 6H4C3.44772 6 3 6.49249 3 7.1V19.9C3 20.5075 3.44772 21 4 21H20C20.5523 21 21 20.5075 21 19.9V7.1C21 6.49249 20.5523 6 20 6H16C15.4477 6 15 6.49249 15 7.1C15 7.70751 15.4477 8.2 16 8.2Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_271_15408)">
            <rect width="24" height="24" fill="#ffff" />
          </g>
        </svg>
        <span>{props.type === "list" ? "Download" : "Print"}</span>
      </div>
    </div>
  );
};

export default Download;
