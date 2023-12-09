import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Input } from "../ui/input";
import { invoices } from "@/constants/mockdata";

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Csadfasdfasdfasdfard",
//     test1: "Pass",
//     test2: "OK",
//     Demotesting: "Check",
//   }
// ];

interface gradeTableProps {
  isOpen: boolean;
}

const GradeTable = () => {
  return (
    <div className="flex flex-row">
      <Table className="relative">
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-[200px]">ID</TableHead>
            <TableHead className="max-w-[200px]">ID</TableHead>
            <TableHead className="max-w-[200px]">Student&rsquo;s name</TableHead>
            <TableHead>Method</TableHead>
            <TableHead >Amount</TableHead>
            <TableHead >Test1</TableHead>
            <TableHead >Test2</TableHead>
            <TableHead >Demo Testing</TableHead>
            <TableHead >Demo Testing</TableHead>
            <TableHead >Demo Testing</TableHead>
            <TableHead >Demo Testing</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                <Input
                  className=" w-fit"
                  type="text"
                  value={invoice.totalAmount}
                />
              </TableCell>
              <TableCell className="text-right">
                <Input
                  className=" w-fit"
                  type="text"
                  value={invoice.totalAmount}
                />
              </TableCell>
              <TableCell>{invoice.test1}</TableCell>
              <TableCell>{invoice.test2}</TableCell>
              <TableCell className="text-right">
                <Input
                  className=" w-fit"
                  type="text"
                  value={invoice.totalAmount}
                />
              </TableCell>
              <TableCell>{invoice.Demotesting}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={10}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default GradeTable;
