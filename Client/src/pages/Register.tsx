import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import Logo from "@/assets/logo.png";
import { register } from "@/services/auth";
import { ThemeProvider } from "@/components/theme-provider";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await register({ name, email, password });
      alert("Registration successful! Please log in.");
      window.location.href = "/login";
    } catch (error) {
      alert("Registration failed. Please try again.");
    }

  };

  const handleViewPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmViewPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="relative z-10 flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
          <Button
            variant="outline"
            size="sm"
            className="absolute top-6 left-6 gap-2 transition-all border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
            onClick={() => (window.location.href = "/")}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>

          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <img
                  src={Logo}
                  alt="Concise Logo"
                  className="w-28 object-contain"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 dark:text-white mb-2">
                Welcome to{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-blue-600 to-orange-500">
                  Concise
                </span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Create an account to get started
              </p>
            </div>

            <Card className="border-slate-200 dark:border-slate-800 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Create Account</CardTitle>
                <CardDescription>
                  Fill in your details to create a new account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="border-slate-300 dark:border-slate-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 border-slate-300 dark:border-slate-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10 border-slate-300 dark:border-slate-700"
                      />
                      <button
                        type="button"
                        onClick={handleViewPassword}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="pl-10 border-slate-300 dark:border-slate-700"
                      />
                      <button
                        type="button"
                        onClick={handleConfirmViewPassword}
                        aria-label={
                          showConfirmPassword ? "Hide password" : "Show password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all"
                  >
                    Create Account
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => (window.location.href = "/login")}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Sign in
                  </button>
                </div>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_top_right,--theme(--color-blue-200/20),transparent_50%),radial-gradient(ellipse_at_bottom_left,--theme(--color-orange-200/20),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,--theme(--color-blue-900/20),transparent_50%),radial-gradient(ellipse_at_bottom_left,--theme(--color-orange-900/20),transparent_50%)]" />
          <div className="absolute inset-0 bg-grid-slate-200/50 mask-[linear-gradient(to_bottom,transparent,black,transparent)] dark:bg-grid-slate-800/20" />
        </div>
      </main>
    </ThemeProvider>
  );
}