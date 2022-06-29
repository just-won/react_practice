import React, { useState } from "react";
import { Tabbar, Page, Tab, Button, Toast } from "react-onsenui";

export default function TabExample() {
  const [index, seIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <Tabbar
      onPreChange={({ index }) => this.setState(index)}
      onPostChange={() => console.log("postChange")}
      onReactive={() => console.log("postChange")}
      position="bottom"
      index={index}
      renderTabs={(activeIndex, tabbar) => [
        {
          content: (
            <Page title="Home" active={activeIndex === 0} tabbar={tabbar}>
              1<Button onClick={()=> setOpen(true)}>open</Button>
              <Toast isOpen={open}>hi</Toast>
            </Page>
          ),
          tab: <Tab label="Home" icon="md-home" />,
        },
        {
          content: (
            <Page title="Settings" active={activeIndex === 1} tabbar={tabbar}>
              2
            </Page>
          ),
          tab: <Tab label="Settings" icon="md-settings" />,
        },
      ]}
    />
  );
}