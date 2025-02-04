import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  children: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  children,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>{children}</p>
  </div>
);
