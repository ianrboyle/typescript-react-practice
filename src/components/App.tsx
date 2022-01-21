import * as React from "react";

import Hello from "./Hello";
import HelloWithHooks from "./HelloWithHooks";

interface IInvoiceListProps {
  customerName: string,
  invoices: {id: number; name: string; total: string}
}

const InvoiceList = (props: IInvoiceListProps) => {
  return <div>
    <h1>Invoices...</h1>
    <h2>{props.invoices}</h2>
  </div>
}

const App = () => {
  const data = {
    customerName: "Google",
    invoices: [
      {id: 123, name: "Dev Work", total: "20.00"},
      {id: 456, name: "Dev Work", total: "50.00"},
      {id: 789, name: "Other Work", total: "100.00"}
    ]
  }

  return (
    <div>
      <InvoiceList invoiceData={data}/>
    </div>
  );
};

export default App;
