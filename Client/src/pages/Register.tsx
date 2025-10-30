import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { ThemeProvider } from "@/context/themeContext";
import { toast } from "sonner";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await register({ name, email, password });
      toast.success("Registration successful! Please log in.");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error(error);
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
      <main className="min-h-screen bg-background">
        <div className="relative z-10 flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
          <Button
            variant="outline"
            size="sm"
            className="absolute top-6 left-6 gap-2 transition-all"
            onClick={() => navigate("/")}
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
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
                Welcome to{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/70">
                  Concise
                </span>
              </h1>
              <p className="text-muted-foreground">
                Create an account to get started
              </p>
            </div>

            <Card className="shadow-xl">
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
                      className="text-sm font-medium text-foreground"
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
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-foreground"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10"
                      />
                      <button
                        type="button"
                        onClick={handleViewPassword}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
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
                      className="text-sm font-medium text-foreground"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="pl-10"
                      />
                      <button
                        type="button"
                        onClick={handleConfirmViewPassword}
                        aria-label={
                          showConfirmPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
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
                    className="w-full font-medium transition-all"
                  >
                    Create Account
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Sign in
                  </button>
                </div>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="text-primary hover:text-primary/80 underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-primary hover:text-primary/80 underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
