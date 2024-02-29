import React, { useState } from "react";
import { Grid, Box, Tabs, Tab, Button } from "@mui/material";
import classes from "./MyPortfolio.module.css";
import { BasquetIcon, PodiumIcon, BallIcon } from "../../../assets/icons/icons";
import Dropdown from "../../UI/Inputs/Dropdown";

const MyPortfolio = () => {
  const [value, setValue] = React.useState(0);
  const [team, setTeam] = React.useState("");
  const [portfolios, setPortfolios] = useState([]);

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
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

  // const portfolios = [
  // [
  //   {
  //     name: "section1",
  //     value,
  //   },
  //   {
  //     name: "section2",
  //     value,
  //   },
  //   {
  //     name: "section3",
  //     value,
  //   },
  //   {
  //     name: "section4",
  //     value,
  //   },
  //   {
  //     name: "section5",
  //     value,
  //   },
  //   {
  //     name: "section6",
  //     value,
  //   },
  //   {
  //     name: "section7",
  //     value,
  //   },
  //   {
  //     name: "section8",
  //     value,
  //   },
  // ],
  // ];

  const equipos = [
    { name: "equipo 1", value: "equipo1" },
    { name: "equipo 2", value: "equipo2" },
    { name: "equipo 3", value: "equipo3" },
    { name: "equipo 4", value: "equipo4" },
    { name: "equipo 5", value: "equipo5" },
    { name: "equipo 6", value: "equipo6" },
    { name: "equipo 7", value: "equipo7" },
    { name: "equipo 8", value: "equipo8" },
  ];

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeSelect = (event) => {
    setTeam(event.target.value);
  };

  const addportFolio = () => {
    const newData = [...portfolios];
    newData.push([
      {
        name: "section1",
        value,
      },
      {
        name: "section2",
        value,
      },
      {
        name: "section3",
        value,
      },
      {
        name: "section4",
        value,
      },
      {
        name: "section5",
        value,
      },
      {
        name: "section6",
        value,
      },
      {
        name: "section7",
        value,
      },
      {
        name: "section8",
        value,
      },
    ]);
    setPortfolios(newData);
  };

  // const removePortFolio = (portfolio) => {
  //   console.log(portfolio);
  //   const newData = portfolios?.filter((el, i) => i !== portfolio);
  //   setPortfolios(newData);
  // };

  return (
    <Grid
      item
      xs={12}
    >
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid
          item
          xs={6}
        >
          <Box
            component="section"
            className={classes.boxPortfolio}
          >
            <div className={classes.headerPortfolio}>
              <div>
                <BasquetIcon />
                <h2>Portfolios</h2>
              </div>
              <div>
                <PodiumIcon />
                <h4>Name Tournament</h4>
              </div>
            </div>
            <Box
              sx={{
                maxWidth: { xs: 320, sm: 700 },
              }}
            >
              <Grid
                item
                xs={12}
              >
                <Box sx={{ width: "100%" }}>
                  {portfolios.length < 8 && (
                    <div className={classes.addPortFolio}>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => addportFolio()}
                      >
                        Add Portfolio
                      </Button>
                    </div>
                  )}
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                    }}
                  >
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example"
                      indicatorColor="inherit"
                    >
                      {portfolios?.map((port, i) => (
                        <Tab
                          key={i}
                          label={`Name (Portfolio ${i + 1})`}
                          {...a11yProps(i + 1)}
                          className={`${classes.tabComponent} ${
                            i === value && classes.activeTab
                          }`}
                        />
                      ))}
                    </Tabs>
                  </Box>

                  {portfolios?.map((port, i) => (
                    <CustomTabPanel
                      key={i}
                      value={value}
                      index={i}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((team, section) => (
                        <div
                          key={section}
                          className={classes.containerDropdown}
                        >
                          <BallIcon />
                          <Dropdown
                            name={`${{ portfolio: i, section }}`}
                            label={`Selection ${section + 1}`}
                            value={team}
                            options={equipos}
                            handleChange={handleChangeSelect}
                          />
                        </div>
                      ))}
                      {/* <div className={classes.removePortFolio}>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => removePortFolio(i)}
                        >
                          remove Portfolio
                        </Button>
                      </div> */}
                    </CustomTabPanel>
                  ))}
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyPortfolio;
