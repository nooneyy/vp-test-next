import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Description = ({ data }: { data: [string, string][] }) => {
  return (
    <AccordionWrapper>
      <DescriptionTable description={data} />
    </AccordionWrapper>
  );
};

const DescriptionTable = ({
  description,
}: {
  description: [string, string][];
}) => {
  return (
    <Table>
      <TableBody>
        {description.map((row, idx) => {
          if (row[1] === "") {
            return (
              <TableRow key={idx}>
                <TableCell className="text-center font-semibold" colSpan={2}>
                  {row[0]}
                </TableCell>
              </TableRow>
            );
          } else {
            return (
              <TableRow key={idx}>
                <TableCell className="border-r-2 border-muted font-semibold">
                  {row[0]}
                </TableCell>
                <TableCell>{row[1]}</TableCell>
              </TableRow>
            );
          }
        })}
      </TableBody>
    </Table>
  );
};

const AccordionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="vice_info" className="w-72">
        <AccordionTrigger>Více informací</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Description;
