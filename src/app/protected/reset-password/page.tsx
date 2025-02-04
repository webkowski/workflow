import { resetPasswordAction } from "@/app/actions";
import Button from "@/components/base/button";

export default async function ResetPassword() {
  return (
    <form className="flex w-full max-w-md flex-col gap-2 p-4 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Reset password</h1>
      <p className="text-foreground/60 text-sm">Please enter your new password below.</p>
      <label htmlFor="password">New password</label>
      <input
        required
        name="password"
        placeholder="New password"
        type="password"
      />
      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        required
        name="confirmPassword"
        placeholder="Confirm password"
        type="password"
      />
      <Button
        formAction={resetPasswordAction}
        type="submit"
      >
        Reset password
      </Button>
    </form>
  );
}
