import React from "react";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core"
import TableItems from "./tableItems";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: string) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function TableTabs({ itemList, onStateChange }) {
  const tabOption = ['IN_CHARGE', 'SHIPPED', 'DELIVERED'];
  const [value, setValue] = React.useState(tabOption[0]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const tabSelect = (arr: any[]) => {
    return arr.map((state) => (
      <TabPanel value={value} index={state} key={state}>
        <TableItems state={state} list={itemList} onStateChange={onStateChange} />
      </TabPanel>
    ));
  };

  return (
    <div >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab value={tabOption[0]} label="Encargado" {...a11yProps(tabOption[0])} />
          <Tab value={tabOption[1]} label="Enviado" {...a11yProps(tabOption[1])} />
          <Tab value={tabOption[2]} label="Entregado" {...a11yProps(tabOption[2])} />
        </Tabs>
      </AppBar>
      {tabSelect(tabOption)}
    </div>
  );
}