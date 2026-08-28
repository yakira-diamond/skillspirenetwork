import Button from "@/components/Button";

export const metadata = { title: "Contact | SkillSpire Network" };

export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-5 sm:px-8 py-16 sm:py-24">
      <p className="eyebrow text-lilac mb-4">Contact</p>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-imperial mb-10">
        Let&apos;s talk.
      </h1>
      <form className="flex flex-col gap-5">
        <div>
          <label className="text-sm font-medium text-graphite/80 block mb-2">Name</label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-graphite/15 px-4 py-3 text-sm focus:outline-none focus:border-imperial"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-graphite/80 block mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full rounded-xl border border-graphite/15 px-4 py-3 text-sm focus:outline-none focus:border-imperial"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-graphite/80 block mb-2">Subject</label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-graphite/15 px-4 py-3 text-sm focus:outline-none focus:border-imperial"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-graphite/80 block mb-2">Message</label>
          <textarea
            rows={5}
            required
            className="w-full rounded-xl border border-graphite/15 px-4 py-3 text-sm focus:outline-none focus:border-imperial"
          />
        </div>
        <Button className="self-start mt-2">Send Message</Button>
      </form>
    </section>
  );
}
