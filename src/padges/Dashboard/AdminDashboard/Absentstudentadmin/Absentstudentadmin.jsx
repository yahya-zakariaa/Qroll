import React from "react";
// import "simple-datatables/dist/style.css";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Letureattentdoctoer from "../../DoctorDashboard/Letureattentdoctoer/Letureattentdoctoer";
import Sectionattenddocter from "../../DoctorDashboard/Sectionattenddocter/Sectionattenddocter";
import Letureattentdoctoeradmin from "../Letureattentdoctoeradmin/Letureattentdoctoeradmin";
import Sectionattenddocteradmin from "../Sectionattenddocteradmin/Sectionattenddocteradmin";
// import Letureattentdoctoer from '../Letureattentdoctoer/Letureattentdoctoer';
// import Sectionattenddocter from '../Sectionattenddocter/Sectionattenddocter';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Absentstudentadmin() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  // const [filteredItems, setFilteredItems] = useState(items);

  // const exportToExcel = () => {
  //       const exportData = filteredItems.map(({ id, name, studentId  ,phonenumber}) => ({
  //         ID: id,
  //         Name: name,
  //         studentId: studentId ,
  //         phonenumber:phonenumber
  //       }));

  //       const worksheet = XLSX.utils.json_to_sheet(exportData);
  //       const workbook = XLSX.utils.book_new();
  //       XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

  //       const excelBuffer = XLSX.write(workbook, {
  //         bookType: "xlsx",
  //         type: "array",
  //       });

  //       const dataBlob = new Blob([excelBuffer], {
  //         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  //       });

  //       saveAs(dataBlob, "students.xlsx");
  //     };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="items-center lg:flex lg:justify-between ">
        <div className="flex gap-2 m-3 lg:m-3 justify-self-center">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-2 items-center  text-[#161B39]"
          >
            <i className="fa-solid fa-arrow-left-long" />
            <h1>BACK</h1>
          </button>
          <h1 className="text-[#71717A] ">COURCES </h1>
          <i
            className="mt-1 fa-solid fa-chevron-right"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] "> view all </h1>
          <i
            className="mt-1 fa-solid fa-chevron-right"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] "> HTML </h1>
          <i
            className="mt-1 fa-solid fa-chevron-right"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] ">excessive absence </h1>
        </div>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            <Tab
              label=" Lectures"
              {...a11yProps(0)}
              sx={{
                border: value === 0 ? "none" : "1px solid #161C39",
                backgroundColor: value === 0 ? "#161C39" : "transparent",
                color: value === 0 ? "#fff !important" : "#161C39",
                borderBottomleftRadius: "8px",
                textTransform: "none",
                fontWeight: "bold",
                borderBottomLeftRadius: "8px",
                borderTopLeftRadius: "8px",
                minWidth: "150px",
              }}
            />
            <Tab
              label="Sections"
              {...a11yProps(1)}
              sx={{
                border: value === 1 ? "none" : "1px solid #161C39",
                backgroundColor: value === 1 ? "#161C39" : "transparent",
                color: value === 1 ? "#fff !important" : "#161C39",
                textTransform: "none",
                fontWeight: "bold",
                borderBottomRightRadius: "8px",
                borderTopRightRadius: "8px",
                minWidth: "150px",
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Letureattentdoctoeradmin />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Sectionattenddocteradmin />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
