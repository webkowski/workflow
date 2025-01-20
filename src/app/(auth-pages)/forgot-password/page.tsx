import Link from "next/link";
import { forgotPasswordAction } from "@/app/actions";
import PageWrapper from "@/components/base/pageWrapper";
import { Message, sanitizeSearchParams, type MessageProps } from "@/components/modules/message";
import { ResetPasswordForm } from "@/components/modules/resetPasswordForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ForgotPassword(props: { searchParams: Promise<MessageProps> }) {
  const rawParams = await props.searchParams;
  const sanitizedParams = sanitizeSearchParams(rawParams);

  return (
    <PageWrapper variant="centered">
      {sanitizedParams ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Reset Password</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <Message message={sanitizedParams} />
              <Link
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                href="/sign-in"
              >
                <span>Back to Sign In</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <ResetPasswordForm onSubmit={forgotPasswordAction} />
      )}
    </PageWrapper>
  );
}
