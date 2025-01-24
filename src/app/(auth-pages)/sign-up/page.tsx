import Link from "next/link";
import { Message, sanitizeSearchParams, type MessageProps } from "@/components/modules/message";
import PageWrapper from "@/components/base/pageWrapper";
import EarlyAccess from "@/components/modules/earlyAccess";
import { subscribeAction } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default async function Signup(props: { searchParams: Promise<MessageProps> }) {
  const rawParams = await props.searchParams;
  const sanitizedParams = sanitizeSearchParams(rawParams);

  return (
    <PageWrapper variant="centered">
      {!sanitizedParams?.success && <EarlyAccess onSubmit={subscribeAction} />}
      {sanitizedParams && (
        <Alert className="flex max-w-md flex-col gap-4">
          <AlertTitle>Sign Up</AlertTitle>
          <AlertDescription className="flex flex-col gap-4">
            <Message message={sanitizedParams} />
            <Link
              className="ml-auto mr-0"
              href="/sign-in"
            >
              <Button>Sign in</Button>
            </Link>
          </AlertDescription>
        </Alert>
      )}
    </PageWrapper>
  );
}
