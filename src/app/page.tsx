import { getCount } from "@/database/count.action";

const Page = async () => {
  const data = await getCount();

  return <div>Cron job Executed: {data?.count} Times</div>;
};

export default Page;
