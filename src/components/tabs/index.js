import React, {Component} from "react";
import {Card, DataTable, Page, Checkbox, AppProvider} from "@shopify/polaris";
import './tabs.css'

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


class DataTables extends Component {
    state = {
        checkedArr: [],
        rows: null,
        items: null,
        selectedValue: null,
    };

//set our props in state
    componentDidMount() {
        this.setState({
            checkedArr: props,
        }, () => this.getRows());
    };


//add rows for the table, change count
    getRows = () => {
        let allRows = [];
        const {checkedArr} = this.state;
        let item = 0;
        checkedArr.forEach((i) => {
            let arr = [];
            arr.push(this.checkboxRender(i.name, i.id, i.value), i.price, i.skuNumber, i.netQuantity, i.netSales);
            i.value === true && (item = ++item);
            allRows.push(arr)
        });
        this.setState({
            rows: allRows,
            items: item,
        })
    };

    //change checkbox value
    handleChange = (name, id, value) => {
        const {checkedArr, selectedValue, items} = this.state;
        let checkedModify = checkedArr;
        let status = selectedValue;
        let count = items;
        checkedModify.forEach(i => {
            if (i.id === id) {
                i.value = !value;
                if (i.value === false) {
                    status = null
                } else if ((i.value === true)) {
                    count = count + 1;
                    if (checkedArr.length === count) {
                        status = true;
                    }
                }
            }
            this.setState({
                checkedArr: checkedModify,
                selectedValue: status,
            }, this.getRows);
        });
    };

//render Checkboxes
    checkboxRender = (name, id, value) => {
        return (
            <Checkbox
                checked={value}
                label={name}
                onChange={() => this.handleChange(name, id, value)}
            />
        );
    };


    selectedAll = (selectedValue) => {
        const {checkedArr} = this.state;
        let status = null;
        let arr = [];
        if ((selectedValue === null) || (selectedValue === false)) {
            checkedArr.forEach((i) => {
                i.value = true;
                arr.push(i);
                status = true;
            })
        }
        if (selectedValue === true) {
            checkedArr.forEach((i) => {
                i.value = false;
                arr.push(i);
                status = false;
            })
        }
        this.setState({
            checkedArr: arr,
            selectedValue: status,
        }, this.getRows)
    };

    render() {
        const {rows, items, selectedValue} = this.state;
        return (
            rows && <AppProvider>
                <Page title="Sales by product">
                    <Card>
                        <div className='selected-block'>{items} selected</div>
                        <DataTable
                            columnContentTypes={[
                                "numeric",
                                "numeric",
                                "numeric",
                                "numeric",
                                "text"
                            ]}
                            headings={[
                                <Checkbox
                                    label="Select all"
                                    checked={selectedValue}
                                    onChange={() => this.selectedAll(selectedValue)}
                                />,
                                "Price",
                                "SKU Number",
                                "Net quantity",
                                "Net sales",
                            ]}
                            rows={rows}
                            // totals={['checkbox', '', '', '', 255, '$155,830.00']}
                        />
                    </Card>
                </Page>
            </AppProvider>
        );
    }
}

export default DataTables;
