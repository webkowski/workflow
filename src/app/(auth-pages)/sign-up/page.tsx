import { Message, sanitizeSearchParams, type MessageProps } from "@/components/modules/message";
import PageWrapper from "@/components/base/pageWrapper";
import EarlyAccess from "@/components/modules/earlyAccess";
import { subscribeAction } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default async function Signup(props: { searchParams: Promise<MessageProps> }) {
  const rawParams = await props.searchParams;
  const sanitizedParams = sanitizeSearchParams(rawParams);

  return (
    <PageWrapper variant="centered">
      {sanitizedParams ? (
        <Alert className="flex max-w-md flex-col gap-4">
          <AlertTitle>Sign Up</AlertTitle>
          <AlertDescription className="flex flex-col gap-4">
            <Message
              message={
                sanitizedParams?.success
                  ? ({
                      success:
                        "Thanks for signing up for our Early Access Beta Program! We'll be in touch soon with more information.",
                    } as MessageProps)
                  : sanitizedParams
              }
            />
          </AlertDescription>
        </Alert>
      ) : (
        <EarlyAccess onSubmit={subscribeAction} />
      )}
    </PageWrapper>
  );
}
