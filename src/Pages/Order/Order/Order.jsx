import React, { useState } from "react";
import cover from "../../../assets/cover2.jpg";
import Cover from "../../../Shared/Cover/Cover";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import TravelCard from "../../../Components/TravelCard/TravelCard";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const Seabeach = menu.filter((item) => item.category === "Seabeach");
  const Forest = menu.filter((item) => item.category === "Forest");
  const Island = menu.filter((item) => item.category === "Island");
  const HillTrack = menu.filter((item) => item.category === "Hill Track");
  const Historic = menu.filter((item) => item.category === "Historic");
  const Popular = menu.filter((item) => item.category === "Popular");
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
          <Tab>Popular</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={Seabeach} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={Forest} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={Island} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={HillTrack} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={Historic} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={Popular} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
