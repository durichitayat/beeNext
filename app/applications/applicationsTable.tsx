import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface Application {
  id: string;
  userid: string;
  applicantid: string;
  application: any
}

export default function UsersTable({ applications }: { applications: Application[] }) {
  console.log(applications);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Applicationid</TableHeaderCell>
          <TableHeaderCell>Country</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {applications.map((a) => (
          <TableRow key={a.id}>
            <TableCell>{a.id}</TableCell>
            <TableCell>
              <Text>{a.applicantid}</Text>
            </TableCell>
            <TableCell>
              <Text>{a.application.key}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
