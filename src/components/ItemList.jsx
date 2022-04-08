import React, { useEffect, useState } from "react"
import Item from "./Item";

export default function ItemList({productos}) {
  
  return (
    <>
    
      <Item productos={productos} />
    </>
  );
}