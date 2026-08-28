import AuthShell from "@/components/AuthShell";

export const metadata = { title: "Check your email | SkillSpire Network" };

export default function CheckEmail() {
  return (
    <AuthShell eyebrow="Almost there" title="Check your email">
      <p className="text-sm text-graphite/65 leading-relaxed">
        We sent you a confirmation link. Click it to activate your account,
        then come back and log in.
      </p>
    </AuthShell>
  );
}
