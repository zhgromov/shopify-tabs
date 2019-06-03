import React from 'react';
import DataTables from './components/tabs'

//our props (data for the table)
const props = [
  {
    id: 1,
    name: 'Emerald Silk Gown',
    price: '$875.00',
    skuNumber: 124689,
    netQuantity: 140,
    netSales: '$122,500.00',
    value: false,
  },
  {
    id: 2,
    name: 'Emerald Silk Gown',
    price: '$875.00',
    skuNumber: 24689,
    netQuantity: 140,
    netSales: '$102,200.00',
    value: true,
  },
  {
    id: 3,
    name: 'Emerald Silk Gown',
    price: '$875.00',
    skuNumber: 224689,
    netQuantity: 80,
    netSales: '$99,107.00',
    value: false,
  },
  {
    id: 4,
    name: 'Emerald Silk Gown',
    price: '$375.00',
    skuNumber: 4689,
    netQuantity: 120,
    netSales: '$22,500.00',
    value: true,
  },
  {
    id: 5,
    name: 'Emerald Silk Gown',
    price: '$375.00',
    skuNumber: 4689,
    netQuantity: 120,
    netSales: '$22,500.00',
    value: true,
  },
  {
    id: 6,
    name: 'Emerald Silk Gown',
    price: '$375.00',
    skuNumber: 4689,
    netQuantity: 120,
    netSales: '$22,500.00',
    value: true,
  },
];



function App() {
  return (
       <DataTables tableData = {props}/>
  );
}

export default App;
