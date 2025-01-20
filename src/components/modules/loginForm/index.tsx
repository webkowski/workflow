import Link from "next/link";
import { cn } from "@/utils/ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type PropsWithClassName } from "@/types";

export type LoginFormProps = PropsWithClassName & {
  onSubmit?: (formData: FormData) => Promise<void>;
};

export function LoginForm({ className, onSubmit }: LoginFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  required
                  id="email"
                  name="email"
                  placeholder="m@example.com"
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    href="/forgot-password"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  required
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
              <Button
                className="w-full"
                formAction={onSubmit}
                type="submit"
              >
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                className="underline underline-offset-4"
                href="/sign-up"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
