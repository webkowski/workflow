import { Suspense } from "react";
import { signInAction } from "@/app/actions";
import PageWrapper from "@/components/base/pageWrapper";
import { LoginForm } from "@/components/modules/loginForm";

export default async function Login() {
  return (
    <PageWrapper variant="centered">
      <Suspense fallback="Loading...">
        <LoginForm onSubmit={signInAction} />
      </Suspense>
    </PageWrapper>
  );
}
