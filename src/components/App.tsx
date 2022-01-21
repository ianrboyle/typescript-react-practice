import * as React from "react";

import Hello from "./Hello";
import HelloWithHooks from "./HelloWithHooks";

interface IInvoiceListProps {
  invoiceData: InvoiceDataType;
  logo?: string

}

type InvoiceType =  {id: number; name: string; total: string; paymentStatus: PaymentStatusType}

type InvoiceDataType = {
  customerName: string;
  invoices: InvoiceType[]
}

type PaymentStatusType =  "paid" | "pending"
const InvoiceList = (props: IInvoiceListProps) => {
  const {customerName, invoices} = props.invoiceData
  const invoicesInfo = invoices.map((invoice) => {return invoice})

  //diffing engine
  return <div>
    <h1>Invoices...</h1>
    <h2>{customerName}</h2>
    
    {invoices.map((invoice) => (
    <div 
    key={invoice.id}
    style={{display: "flex", justifyContent: "space-between"}}>
    <div>{invoice.name}</div>
    <div>{invoice.total}</div>
    <div>{invoice.paymentStatus}</div>
    </div>))}
  </div>
}

const App = () => {
  const data: InvoiceDataType = {
    customerName: "Google",
    invoices: [
      {id: 123, name: "Dev Work", total: "20.00", paymentStatus: "paid"},
      {id: 456, name: "Dev Work", total: "50.00", paymentStatus: "paid"},
      {id: 789, name: "Other Work", total: "100.00", paymentStatus: "not paid"}
    ]
  }

  return (
    <div>
      <InvoiceList invoiceData={data}/>
    </div>
  );
};

export default App;
