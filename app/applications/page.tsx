import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from 'app/search';
import UsersTable from 'app/applications/applicationsTable';

interface Application {
  id: string;
  Userid: string;
  Applicantid: string;
  Application: JSON;
}

const Userid = "user_id_value";

export default async function Applications({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT id, Userid, Applicantid, Application
    FROM applications 
    WHERE Userid = ${Userid};
  `;
  const applications = result.rows as Application[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Applications</Title>
      <Text>A list of your current applications.</Text>
      <Card className="mt-6">
        <UsersTable applications={applications} />
      </Card>
    </main>
  );
}