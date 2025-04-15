
import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface AuthCardProps {
  header: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function AuthCard({ header, children, footer, className = "" }: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1d3748] p-4">
      <Card className={`w-full max-w-md bg-[#172c3a] text-white border-0 shadow-xl ${className}`}>
        <CardHeader className="pb-6">
          {header}
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        {footer && (
          <CardFooter>
            {footer}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
