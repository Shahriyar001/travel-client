import React, { useState } from "react";
import cover from "../../../assets/cover2.jpg";
import Cover from "../../../Shared/Cover/Cover";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  return (
    <div>
      <Cover img={cover} title={"Book Ticket"} />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Seabeach</Tab>
          <Tab>Forest</Tab>
          <Tab>IsLand</Tab>
          <Tab>Hill Track</Tab>
          <Tab>Historic</Tab>
          <Tab>Title 2</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
