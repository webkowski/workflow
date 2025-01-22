import { Message, type MessageProps } from "@/components/modules/message";
import PageWrapper from "@/components/base/pageWrapper";
import EarlyAccess from "@/components/modules/earlyAccess";

export default async function Signup(props: { searchParams: Promise<MessageProps> }) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return <Message message={searchParams} />;
  }

  return (
    <PageWrapper variant="centered">
      <EarlyAccess />
    </PageWrapper>
  );
}
